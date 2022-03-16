import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { DoctorsData } from "../../DummyData/DoctorsData";
import './View.css'
import { Link } from "react-router-dom";
import Sidebar from "../../Dashboard/AdminDash/Sidebar";
import axios from "axios";



export default function ViewDoctors() {
    const [ values, setValues ] = useState("")

    const loadDoctors =  () => {
        try {
            axios.get("http://localhost:8000/getDoctors").then(
                (res) => {
                    setValues(res.data)
                  
                }
            )
                    
        } catch (error) {
            if (error) console.log('Error fetching data'.error)
        }

    }
    useEffect(()=>{
        loadDoctors()
    },[]);


    //delete entry
    const deleteDoctors = (id)=>{
        try {
            
            axios.post(`http://localhost:8000/deleteDoctor/${id}`).then(
                (res)=>{
                    console.log(res.data)
                }
            )
        } catch (error) {
            if(error) console.log('An error occured while deleting' . error)
        }
    }



        
    


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'holorific', headerName: 'Holorific', width: 90 },
        {
            field: 'firstName', headerName: 'First Name', width: 200, renderCell: (params) => {
                return (
                    <div className="userName">
                        {params.row.firstName}
                    </div>
                );
            }
        },

        { field: 'lastName', headerName: 'Last Name', width: 200 },
        { field: 'department', headerName: 'Department', width: 200 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'phoneNo', headerName: 'Phone No', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to='/updateDoc'>
                            <button className="editBtnDr">Edit</button>
                        </Link>
                        <button className="dltBtn" onClick={()=>deleteDoctors(params.id)}>Delete</button>
                    </>
                )
            }
        }
    ]
    console.log(values.id);
    return (

    <div className="viewUser">
        
            <div className="home-section">
            <DataGrid
                rows={values}
                disableSelectionOnClick
                columns={columns}
            />
        </div>
    </div>


    )

}