const db = require('../config/db');
const Patient = require('../models/patients');


//Register Patient
exports.createPatient = async(req, res)=>{
    try {
          await Patient.create(req.body)
          res.status(200).send('Patient Registered')
    } catch (error) {
        res.send(error)
    }
}

//fetch all Patients from the db
exports.getPatients = async (req, res)=>{
    try{
        const patients= await Patient.findAll({})
        res.status(200).send(patients)
 
    }catch(err){
        console.log("An error ocurred",err)
    }
}

//update patient record
exports.updatePatients = async(req, res)=>{
    const {id} = req.body;
    try {
        
    } catch (error) {
        
    }
}

