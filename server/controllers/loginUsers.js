// const User = require("../models/createUsers");
// const bcrypt = require('bcrypt');


// exports.loginUsers = async (req, res)=>{
//     const {id, password} = req.body;
//     await User.findOne({where:{id:id}});

//     //compares passwords
//     const dbPassword = User.password;
//     const isValid = bcrypt.compare(req.body.password, dbPassword)
//     if(!isValid){
//         res.json({
//             success: false,
//             message: 'Check Login credentials'
//         })
//     } else {
//         res.status(200).send('Login Successful')
//     }
// }