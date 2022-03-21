import React, { useState } from 'react';
import axios from 'axios';


function UpdateDoc() {

    //Hooks
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState(' ')
    const [phoneNo, setPhoneNo] = useState('')
  
    //function to handle Submit 
    const handleSubmit = async(e, id)=>{

      try {
         const id = await axios.update(`http://localhost:8000/updateDoctor/${id}`, {
          firstName,
          lastName,
          email,
          department,
          phoneNo
        }).then (
          (req, res)=>{
            console.log(res)
          }
        )
        
        setFirstName('');
        setLastName ('');
        setEmail ('');
        setDepartment('');
        setPhoneNo('')

        
        
      } catch (error) {
        console.log(error `${error}`)
      }
    }


  return (
    <div>
        <h1>Update Doctor</h1>
        <form onSubmit={handleSubmit}>
          <label>firstname</label>
            <input type="text" placeholder='Enter first name' onChange={(e)=>{setFirstName(e.target.value)}}/>

            <label>lastname</label>
            <input type="text" placeholder='Enter last name' onChange={(e)=>setLastName(e.target.value)} />

            <label>useremail</label>
            <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />

            <label>department</label>
            <input type="email" placeholder='Enter Email' onChange={(e)=>setDepartment(e.target.value)} />

            <label>phoneNo</label>
            <input type="text" placeholder='Enter phone' onChange={(e)=>setPhoneNo(e.target.value)}/>

            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default UpdateDoc