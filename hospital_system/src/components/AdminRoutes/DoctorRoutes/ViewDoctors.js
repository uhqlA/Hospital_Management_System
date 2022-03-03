import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { DoctorsData } from "../../DummyData/DoctorsData";
import './ViewDoctors.css'
import { Link } from "@mui/material";
import Sidebar from "../../Dashboard/AdminDash/Sidebar";



export default function ViewDoctors() {
    const [data, setData] = useState(DoctorsData);


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Name', width: 200, renderCell: (params) => {
                return (
                    <div className="doctorName">
                        {params.row.name}
                    </div>
                );
            }
        },


        { field: 'department', headerName: 'Department', width: 120 },
        { field: 'email', headerName: 'Email', width: 200 },
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

    <div className="viewDoctors">
    <Sidebar />
            <div className="home-section">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
            />
        </div>
    </div>


    )

}