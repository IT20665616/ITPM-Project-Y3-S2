import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import swal from "sweetalert";


function SpecialNeedSearch() {
    const [specialNeed, setSpecialNeeds] = useState([]);

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
                            />
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div className="col-4">
                            <button type="reset" class="btn btn-outline-primary">
                                Search
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
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {specialNeed.map((val, key) => {
                                return (
                                    <tr>
                                        <th>{val.name}</th>
                                        <td>{val.address}</td>
                                        <td>{val.phone2}</td>
                                        <td>
                                            <Link to={`/singleSpecialNeed/${val._id}`}><button type="submit" class="btn btn-outline-primary">
                                                View Details
                                            </button></Link>
                                        </td>
                                    </tr>
                                );
                            })}
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

export default SpecialNeedSearch;