const Doctor = require('../models/doctors')
const db = require('../config/db');


//create a new doctor
exports.createDoctor = async (req, res)=>{
    try {
        await Doctor.create(req.body);
        res.send(req.body);
    } catch (error) {
        console.log("this is doctor create error=>", error)
    }
}

//fetch doctors from the Db
exports.getDoctors = async (req, res)=>{
   try{
       const doctors= await Doctor.findAll({})
       res.status(200).send(doctors)

   }catch(err){
       console.log("An error occured",err)
   }
}

 //update Doctors data
 exports.updateDoctors = async (req, res)=>{
        const {id} = req.params.id;
       try {
        const outcome = await Doctor.update(req.body, {where:{id:id}})
        if (outcome == 1){
            res.status(200).send({
                message: 'Record updated successfully'
            })
        } else {
            res.send('Please try again')
        }
           
       } catch (error) {
           res.send('An error occured while updating records' . error)
       }
    }

//Delete doctors
exports.deleteDoctors = async (req, res)=>{
    const id = req.params.id;
 
    try {
        const outcome = await Doctor.destroy({where:{id:id}})
        if (outcome == 1){
            res.status(200).send({
                message: 'Record deleted'
            })
        } else {
            res.send('Please try again')
        }
    } catch (error) {
        res.send('An error occured while deleting Doctor entry')
    }
}