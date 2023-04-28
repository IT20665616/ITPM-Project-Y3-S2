import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import swal from "sweetalert";
import axios from "axios";

function DonatorDetails(prop) {

    const [obj, setData] = useState("");
    const [dname, setName] = useState("");
    const [dphone1, setPhone1] = useState("");
    const [dphone2, setPhone2] = useState("");
    const [daddress, setAddress] = useState("");
    const [demail, setNic] = useState("");
    const { id } = useParams();

    useEffect(() => {
        function getDonator() {
            axios
                .get(`http://localhost:8070/donator/request/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                    setName(obj.dname);
                    setPhone1(obj.dphone1);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getDonator();
    }, []);

    

    return (
        <>
            <Sidebar />
            <div id="main">

                <div id="id1">
                    <div class="row m-5">
                        <h3><b>Details of the Donator</b></h3>
                    </div>
                        <>
                            <div class="form-group">
                                <div className="row m-5">
                                    <div class="col-3">
                                        <label for="name">Full Name of the Donator</label>
                                    </div>
                                    <div class="col-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            defaultValue={dname}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row m-5">
                                    <div class="col-3">
                                        <label for="code">Mobile Number </label>
                                    </div>

                                    <div class="col-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone1"
                                            value={dphone1}
                                            
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row m-5">
                                    <div class="col-3">
                                        <label for="code">Mobile Number (alt.)</label>
                                    </div>
                                    <div class="col-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone2"
                                            defaultValue={obj.dphone2}
                                        />
                                    </div>
                                </div>

                            </div>

                            <div class="form-group">
                                <div class="row m-5">
                                    <div class="col-3">
                                        <label for="price">Address</label>

                                    </div>
                                    <div class="col-4">
                                        <textarea
                                            class="form-control"
                                            id="address"
                                            rows="3"
                                            value={obj.daddress}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row m-5">
                                    <div class="col-3">
                                        <label for="price">Email</label>
                                    </div>
                                    <div class="col-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="nic"
                                            value={obj.demail}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </>


                </div>

                <div class="row m-5">
                    <div className="col-1">
                        <Link to={`/searchSpecialNeed`}><button type="submit" class="btn btn-outline-success">
                            Back
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonatorDetails;
