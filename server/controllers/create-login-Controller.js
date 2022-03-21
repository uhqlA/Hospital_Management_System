
const bcrypt = require('bcrypt')
const db = require('../config/db')
const User = require('../models/createUsers')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cookies = require('cookies')



//create a new user with encrypted password
exports.createAuthUsers = async (req, res) => {
    const { id, username, email, password, idRoles } = req.body

    try {

        const hashedPassword = await bcrypt.hash(password, 10)

        const values = {
            idUsers: id,
            userName: username,
            email: email,
            password: hashedPassword,
            idRoles: idRoles
        }


        await User.create(values, (error) => {
            if (error) return res.send('An error occurred creating users'.error)
        })
        res.status(200).send('User created Role defined');

    } catch (error) {
        res.send('An error occurred'.error);
    }
}

//login Users
exports.loginUsers = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } }, (err) => {
        if (err) return res.status(500).send('Error occured in the server')
    });
    if (!user) return res.status(404).send('User not found')


    //compares passwords
    const dbPassword = user.password;
    await bcrypt.compare(password, dbPassword, (err, isValid) => {
        if (err) console.log('An error occurred in the bcrypt compare', err)

        if (!isValid) {
            res.status(401).json({
                message: 'Check Login credentials'
            })
        } else {
            const token = jwt.sign({ email: email }, 'secretKeyGoesHere')
            res.cookie('access_token', token, user.idRoles);
            res.json({
                message: "Login successful",
                token, 
            });
            
        }
       
    })


}

//logout Users
exports.logout = (req, res) => {
    res.clearCookie('access_token').status(200).send('Successfully logged out')

}

//Fetch all Users from the Database
exports.getUsers = async (req, res) => {
    const sql = 'SELECT * FROM Users';
    const data = await db.query(sql, (err) => {
        if (err) throw (err)
    })
    res.send(data)
}






