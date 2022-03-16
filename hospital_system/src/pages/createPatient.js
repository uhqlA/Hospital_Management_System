import { useState } from "react";
import React from 'react'
import axios from 'axios'

function CreatePatient() {

 //Hooks
  const [name, setName] = useState('');
  const [DOB, setDOB]= useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("", {
        name,
        DOB,
        address,
        gender
      });
      
      setName('');
      setDOB ('');
      setAddress ('');
      setGender('')
      
    } catch (error) {
      console.log(error `${error}`)
    }
  }
    return (
        <div>
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>firstname</label>
                <input type="text" placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />

                <label>lastname</label>
                <input type="text" placeholder='Enter Date Of Birth' onChange={(e) => setDOB(e.target.value)} />

                <label>user email</label>
                <input type="text" placeholder='Enter address' onChange={(e) => setAddress(e.target.value)} />

                <label>Male</label>
                <input type="radio" value='Male'/>

                <label>Female</label>
                <input type="radio" value='Female' />

                <input type="submit" placeholder='Submit' />
            </form>
        </div>
    )
}

export default CreatePatient