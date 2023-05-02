import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import jspdf from 'jspdf';
import 'jspdf-autotable';
import Sidebar from "../Hansi/GramaNiladhariUI/Sidebar";


export default function RegisterPersonSearch() {
    const [person, setRegisterPerson] = useState([]);
    const [position, setPosition] = useState([]);

    useEffect(() => {
        function getPersons() {
            axios
                .get("http://localhost:8070/registerPerson")
                .then((res) => {
                    console.log(res.data);
                    setRegisterPerson(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getPersons();
    }, []);

    function filterRequests(person, position) {
        if (position !== '') {
            return person.filter((val) => val.position === position);
        }

        return person;
    }
    const filteredRequests = filterRequests(person, position);


    function jsPdfgenerator() {

        var doc = new jspdf('p', 'pt');
        const tableRows = filteredRequests.map((val) => [
            val.name,
            val.phone,
            val.address,
            val.position,
        ]);

        doc.autoTable({
            head: [['Full Name', 'Phone Number', 'Address', 'Job Position']],
            body: tableRows,
            margin: { top: 50 },
            columnStyles: { europe: { halign: 'center' } }
        });

        doc.save("Employee List.pdf");
    }


    return (
        <>
            <Sidebar />
            <div id="main">

                <div class="container p-5">
                    <div class="row">
                        <h3><b>Add Employees</b></h3>
                    </div>

                    <div class="row mt-5">
                        <div class="col-3">
                            <label for="search">Search by Position</label>
                        </div>
                        <div class="col-3">
                            <select
                                className="form-select"
                                name="occupation"
                                onChange={(e) => {
                                    setPosition(e.target.value);
                                }}
                            >
                                <option disabled={true} value="" selected hidden>
                                    --Choose service type--
                                </option>
                                <option value="gardening"> Gardening</option>
                                <option value="domestic">Domestic and outdoor Cleaning</option>
                                <option value="polishing">Polishing and Organizing</option>
                                <option value="eldercare"> Eldery care</option>
                                <option value="securityservice"> Security Services</option>
                                <option value="driver"> Drivers</option>
                                <option value="carwash"> Car Washing</option>
                                <option value="currier"> Courier Services</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="reset" class="btn btn-outline-primary" onClick={() => window.location.reload(true)}>
                                Reset
                            </button>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <Link to={`/personRegister`}><button type="submit" class="btn btn-outline-primary">
                            Add a new Employee
                        </button></Link>
                    </div>

                    <table id="my-table" class="table w-100 table-bordered mt-5 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Full Name</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Job Position</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((val, key) => {
                                return (
                                    <tr>
                                        <th>{val.name}</th>
                                        <td>{val.phone}</td>
                                        <td>{val.address}</td>
                                        <td>{val.position}</td>

                                        <td align="center">
                                            <Link to={`/updateForm/${val._id}`}>
                                                <button type="submit" class="btn btn-primary">
                                                    View Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="button" class="btn btn-success" onClick={jsPdfgenerator} >
                                Download PDF
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
