const Employee = require("../models/employees")
const db = require ('../config/db')

//create a new Employee
exports.createEmployee = async(req, res)=>{
    try {
        await Employee.create(req.body);
        res.send('Employee created');
    } catch (error) {
        res.send(error)
    }
}

//fetch all Employees from the Database
exports.getEmployees = async (req, res)=>{
    try{
        const employee= await Employee.findAll({})
        res.status(200).send(employee)
 
    }catch(err){
        console.log("An error occured",err)
    }
}


//update Employees records
exports.updateEmployees = async (req, res)=>{
    const {id} = req.body;
    try {
        const outcome = await Employee.update(req.body, {where:{id:id}})
        if (outcome == 1){
            res.status(200).send({
                message: 'Record updated successfully'
            })
        } else {
            res.send('PLease try again')
        }
        
    } catch (error) {
        res.send('An error occured while updating records' . error)
    }
}


//delete Employees
exports.deleteEmployee = async (req, res)=>{
    const id = req.params.id;

    try {
        const outcome = await Employee.destroy({where:{id:id}})
        if (outcome == 1){
            res.status(200).send({
                message: 'Record deleted'
            })
        } else {
            res.send('Please try again')
        }
        
    } catch (error) {
        res.send('An error occured while deleting Employee entry')
    }
}