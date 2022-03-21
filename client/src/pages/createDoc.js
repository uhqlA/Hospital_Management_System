import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function CreateDoc() { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
  //handle functionalities

  const handleSubmit = async(e)=>{

      try{
          const {data} = await axios.post("http://localhost:8000/createDoctor",{
            firstName,
            lastName,
            email,
            department,
            phoneNo

          });
        
          alert('Doctor details entered successfully')

      }catch(error){
          console.log("this is the handleSubmit error", error)
      }
  }
  return (
    <> 
    <h1>create Doctor</h1>


    <form onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
    <TextField id="standard-basic" label="Enter first name" variant="standard" onChange={(e)=>{setFirstName(e.target.value)}}/>
    <TextField id="standard-basic" label="Enter Last name" variant="standard" onChange={(e)=>{setLastName(e.target.value)}}/>
    <TextField id="standard-basic" label="Enter Email" variant="standard" onChange={(e)=>{setEmail(e.target.value)}}/>
    <TextField id="standard-basic" label="Enter Department" variant="standard" onChange={(e)=>{setDepartment(e.target.value)}}/>
    <TextField id="standard-basic" label="Enter Phone No" variant="standard" onChange={(e)=>{setPhoneNo(e.target.value)}}/>
    
    </div>
      
    </Box>
    
   
    </form>
 

    </>
  )
}

export default CreateDoc