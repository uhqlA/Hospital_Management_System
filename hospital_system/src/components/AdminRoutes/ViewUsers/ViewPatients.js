import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { DoctorsData } from "../../DummyData/DoctorsData";
import './View.css'
import { Link } from "@mui/material";
import Sidebar from "../../Dashboard/AdminDash/Sidebar";
import axios from "axios";



export default function ViewPatient() {
    const [ values, setValues ] = useState("")

    const loadPatients =  () => {
        try {
            axios.get("http://localhost:8000/getPatients").then(
                (res) => {
                    setValues(res.data)
                }
            )
        
            
        } catch (error) {
            if (error) console.log('Error fetching data'.error)
        }

    }

    useEffect(()=>{
        loadPatients();
    }, [])


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Patient Name', width: 300, renderCell: (params) => {
                return (
                    <div className="userName">
                        {params.row.firstName}
                    </div>
                );
            }
        },

        { field: 'DOB', headerName: 'Date of Birth', width: 200 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 100 },
        { field: 'idEmployee', headerName: 'Admitting Staff', width: 200 },
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