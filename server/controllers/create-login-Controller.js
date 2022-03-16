
const bcrypt = require('bcrypt')
const db = require('../config/db')
const User = require('../models/createUsers')
const jwt = require('jsonwebtoken')
const cookieParser = require ('cookie-parser')
const cookies = require('cookies')



//create a new user with encrypted password
exports.createAuthUsers = async (req, res) =>{
    const {id, username, password, idRoles} = req.body
        
    try {
                
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const values = {
            idUsers: id,
            userName: username,
            password: hashedPassword,
            idRoles: idRoles
        }
           
   
        await User.create(values, (error)=>{
            if(error) return res.send(error)
        })
        res.status(200).send('User created Role defined');
        
    } catch (error) {
        res.send('An error occurred' . error);
    }
}


//login Users
exports.loginUsers = async (req, res)=>{
    const {id} = req.body;
    const user = await User.findOne({where:{idUsers:id}}, (err)=>{
        if(err) return res.status(500).send('Error occured in the server')
    });
    if(!user) return res.status(404).send('User not found')
 

    //compares passwords
    const dbPassword = user.password;
     const isValid = await bcrypt.compare(req.body.password, dbPassword)
           if(!isValid){
                res.status(401).json({
                success: false,
                message: 'Check Login credentials'
            })
        } else {
            const token = jwt.sign({id:id}, 'secretKeyGoesHere')
            res.cookie('access_token', token, {
              httpOnly: true
            }).status(200).send('Login Successful')
         }

}

//logout Users
exports.logout = (req, res)=>{
    res.clearCookie('access_token').status(200).send('Successfully logged out')
  
}

//Fetch all Users from the Database
exports.getUsers = async (req, res)=>{
    const sql = 'SELECT * FROM Users';
    const data = await db.query(sql, (err)=>{
        if(err) throw(err)
    })
    res.send(data)
}






