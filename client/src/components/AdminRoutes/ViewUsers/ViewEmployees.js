import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import './View.css'
import { Link } from "@mui/material";
import axios from "axios";



export default function ViewEmployees() {
    const [ values, setValues ] = useState("")

    const loadEmployees =  () => {
        try {
            axios.get("/getEmployees").then(
                (res) => {
                    setValues(res.data)
                }
            )
        
            
        } catch (error) {
            if (error) console.log('Error fetching data'.error)
        }

    }

    useEffect(()=>{
        loadEmployees()
    }, [])


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
       
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
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'phoneNo', headerName: 'Phone No', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to='#'>
                            <button className="editBtnDr">Edit</button>
                        </Link>
                        <button className="dltBtn">Delete</button>
                    </>
                )
            }
        }
    ]

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