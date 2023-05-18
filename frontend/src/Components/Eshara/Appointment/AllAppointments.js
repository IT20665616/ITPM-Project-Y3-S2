import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import jspdf from 'jspdf'
import 'jspdf-autotable'
import { Link } from 'react-router-dom';
import Sidebar from '../../Hansi/GramaNiladhariUI/Sidebar';

// const fname = /^[a-zA-Z]/;
//     const nic = /^\d{9}[vV]$/;
//     const mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
//     const num = /^\d{10}$/;

export default function AllAppointments() {

    const [data, setData] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchStatus, setSearchStatus] = useState("");

    useEffect(() => {
        function getAllData() {
            axios.get("http://localhost:8070/appointment/appointments").then((res) => {
                console.log(res.data.existingappointments);
                setData(res.data.existingappointments);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAllData();
    }, [])

    function deleteRequest(id) {
        swal({
            title: 'Are You Sure?',
            text: 'Once deleted, You will not able to recover these details !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            timer: 6000

        }).then(() => {
            axios
                .delete(`http://localhost:8070/appointment/delete/${id}`);
            swal({
                title: "Success!",
                text: "Deleted record Successfully",
                icon: "success",
                timer: 2000,
                button: false,
            });

            setTimeout(() => {
                window.location.replace("http://localhost:3000/appoitments");
            }, 3000)

        }).catch((err) => {
            swal({
                title: "Error!",
                text: "Coulden't Delete the record",
                type: "error",
            });
        });
    }


    function updateStatus(id) {
        const newStatus = {
            status: "Accepted",
        };

        axios
            .put(`http://localhost:8070/appointment/update/status/${id}`, newStatus)
        swal({
            title: "Appointment Accepted!",
            icon: "success",
            timer: 2000,
            button: false,
        });


        setTimeout(() => {
            window.location.replace("http://localhost:3000/appoitments");
        }, 2000)
    }

    function filterRequestsByDate(data, searchDate, searchStatus) {
        if (searchDate !== '' && searchStatus !== '') {
            return data.filter((val) => val.createdDate === searchDate && val.status === searchStatus);
        }
        else if (searchDate !== '' && searchStatus === '') {
            return data.filter((val) => val.createdDate === searchDate);
        }
        else if (searchDate === '' && searchStatus !== '') {
            return data.filter((val) => val.status === searchStatus);
        }
        return data;
    }
    const filteredRequests = filterRequestsByDate(data, searchDate, searchStatus);

    //pdf generating
    function jsPdfgenerator() {

        var doc = new jspdf('l', 'pt', 'a3');

        doc.text(600, 20, 'Appointments List', { align: 'center' },);
        doc.autoTable({ html: '#class-table' })

        doc.autoTable({
            columnStyles: { europe: { halign: 'center' } },
            margin: { top: 10 },
        })

        doc.save("appointments.pdf");
    }

    return (
        <div>
            <Sidebar />
            <div id='main'>

                <div class="container p-5">
                    <div class="row">
                        <h2><b>Current Appointments</b></h2>
                    </div>

                    <div class="row mt-5">
                        <div class="col-3">
                            <label for="search">Search by Date</label>
                        </div>
                        <div class="col-3">
                            <input type="date"
                                class="form-control"
                                onChange={(e) => {
                                    setSearchDate(e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div class="row mt-5">

                        <div class="col-3">
                            <label className="form-label">
                                Search by Status
                            </label>
                        </div>
                        <div class="col-3">
                            <div className="form-group">

                                <select
                                    className="form-select"
                                    name="occupation"
                                    onChange={(e) => {
                                        setSearchStatus(e.target.value);
                                    }}
                                >
                                    <option disabled={true} value="" selected hidden>
                                        --Choose Status--
                                    </option>
                                    <option value="Pending"> Pending</option>
                                    <option value="Accepted">Accepted</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="reset" class="btn btn-outline-primary" onClick={() => window.location.reload(true)}>
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className='row mt-5'>

                        <table id="my-table" class="table table-hover table-responsive">
                            <thead className="table-active">
                                <tr>

                                    <th>Full Name</th>
                                    <th>NIC</th>
                                    <th>Mobile Number</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {filteredRequests && filteredRequests.map((val, key) => {
                                    return (
                                        <tr style={{ backgroundColor: "white" }}>
                                            <td>{val.name}</td>
                                            <td>{val.nic}</td>
                                            <td>{val.mobileNo}</td>
                                            <td>{val.time}</td>
                                            <td>{val.date}</td>
                                            
                                            <td><b>{val.status}</b></td>

                                            <td>
                                                <div className='row'>
                                                    <div className='col-4'>
                                                        <button className="btn btn-outline-danger"
                                                            onClick={() => deleteRequest(val._id)}>
                                                            delete
                                                        </button>
                                                    </div>
                                                    <div className='col-2'>
                                                        <button className="btn btn-outline-primary" onClick={() => updateStatus(val._id)}>
                                                            Accept
                                                        </button>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>


                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div class="row mt-4">
                        <div className="col-4">
                            <input type="button" value="Print Pdf" onClick={() => jsPdfgenerator()} className="btn btn-warning" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
