import axios from 'axios';
import React, { useState } from 'react'


function CreateEmployee() {

  //Hooks
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('')

  //function to handle Submit 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:8000/createEmployee", {
        firstName,
        lastName,
        email,
        phoneNo
      });
      
      setFirstName('');
      setLastName ('');
      setEmail ('');
      setPhoneNo('')
      
    } catch (error) {
      console.log(error `${error}`)
    }
  }


  return (
    <div>
        <h1>Create Employee</h1>
        <form onSubmit={handleSubmit}>
          <label>firstname</label>
            <input type="text" placeholder='Enter first name' onChange={(e)=>{setFirstName(e.target.value)}}/>

            <label>lastname</label>
            <input type="text" placeholder='Enter last name' onChange={(e)=>setLastName(e.target.value)} />

            <label>useremail</label>
            <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />

            <label>phoneNo</label>
            <input type="text" placeholder='Enter phone' onChange={(e)=>setPhoneNo(e.target.value)}/>

            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default CreateEmployee