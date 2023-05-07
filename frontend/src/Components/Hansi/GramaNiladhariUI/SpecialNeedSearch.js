import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import jspdf from 'jspdf';
import 'jspdf-autotable';
import Sidebar from "./Sidebar";


export default function SpecialNeedSearch() {
    const [specialNeed, setSpecialNeeds] = useState([]);
    const [searchDate, setSearchDate] = useState("");
    const [searchStatus, setSearchStatus] = useState("");


    useEffect(() => {
        function getSpecialNeeds() {
            axios
                .get("http://localhost:8070/SpecialNeed")
                .then((res) => {
                    setSpecialNeeds(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getSpecialNeeds();
    }, []);

    

    function filterRequestsByDate(specialNeed, searchDate, searchStatus) {
        if (searchDate !== '' && searchStatus !== '') {
            return specialNeed.filter((val) => val.createdDate === searchDate && val.status === searchStatus);
        }
        else if (searchDate !== '' && searchStatus === '') {
            return specialNeed.filter((val) => val.createdDate === searchDate);
        }
        else if (searchDate === '' && searchStatus !== '') {
            return specialNeed.filter((val) => val.status === searchStatus);
        }
        return specialNeed;
    }
    const filteredRequests = filterRequestsByDate(specialNeed, searchDate, searchStatus);

    // pdf generating
    function jsPdfgenerator() {

        //new document in jspdf
        var doc = new jspdf('p', 'pt');
        const tableRows = filteredRequests.map((val) => [
            val.name,
            val.address,
            val.phone2,
            val.description,
            val.createdDate
        ]);

        doc.autoTable({
            head: [['Full Name', 'Address', 'Mobile', 'Request', 'Date']],
            body: tableRows,
            margin: { top: 50 },
            columnStyles: { europe: { halign: 'center' } }
        });

        doc.save("Special Needs Requests List.pdf");
    }

    return (
        <>
            <Sidebar />
            <div id="main">

                <div class="container p-5">
                    <div class="row">
                        <h3><b>Special Needs of poor people</b></h3>
                    </div>

                    <div class="row mt-5">
                        <div class="col-3">
                            <label for="search">Search by Date</label>
                        </div>
                        <div class="col-3">
                            <input type="date"
                                class="form-control"
                                onChange={(e) => {
                                    setSearchDate(e.target.value);
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

                    <div class="row mt-4">
                        <Link to={`/addSpecialNeed`}><button type="submit" class="btn btn-outline-primary">
                            Add a new Special Need
                        </button></Link>
                    </div>

                    <table id="my-table" class="table w-100 table-bordered mt-5 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Full Name</th>
                                <th scope="col">Request</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((val, key) => {
                                return (
                                    <tr>
                                        <th>{val.name}</th>
                                        <td>{val.description}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status}</td>
                                        <td>{val.createdDate}</td>

                                        <td align="center">
                                            <Link to={`/singleSpecialNeed/${val._id}`}>
                                                < i class="ri-eye-fill"></i></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="button" class="btn btn-success" onClick={() => jsPdfgenerator()}>
                                Download PDF
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
