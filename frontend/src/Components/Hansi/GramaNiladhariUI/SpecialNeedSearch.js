import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import swal from "sweetalert";


export default function SpecialNeedSearch() {
    const [specialNeed, setSpecialNeeds] = useState([]);
    const [searchDate, setSearchDate] = useState("");

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

    function filterRequestsByDate(specialNeed, searchDate) {
        if (searchDate !== '') {
            return specialNeed.filter((val) => val.createdDate === searchDate);
        }
        return specialNeed;
    }
    const filteredRequests = filterRequestsByDate(specialNeed, searchDate);

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
                            <label for="search">Enter the created date</label>
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

                    <table class="table w-100 table-bordered mt-5 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Full Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">CreatedDate</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((val, key) => {
                                return (
                                    <tr>
                                        <th>{val.name}</th>
                                        <td>{val.address}</td>
                                        <td>{val.phone2}</td>
                                        <td>{val.createdDate}</td>
                                        <td>
                                            <Link to={`/singleSpecialNeed/${val._id}`}><button type="submit" class="btn btn-outline-primary">
                                                View Details
                                            </button></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                            {/* 
                            {(() => {
                                if (click === true) {
                                    return (
                                        <div>
                                            {searchData.map((val, key) => {
                                                return (
                                                    <tr>
                                                        <th>{val.name}</th>
                                                        <td>{val.address}</td>
                                                        <td>{val.phone2}</td>
                                                        <td>{val.createdDate}</td>
                                                        <td>
                                                            <Link to={`/singleSpecialNeed/${val._id}`}><button type="submit" class="btn btn-outline-primary">
                                                                View Details
                                                            </button></Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </div>
                                    )
                                } */}
                        </tbody>
                    </table>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="button" class="btn btn-success">
                                Download PDF
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
