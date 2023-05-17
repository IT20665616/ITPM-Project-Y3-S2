import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../Hansi/GramaNiladhariUI/Sidebar";

export default function DetailsForGN() {
    const [fullName, setfullName] = useState("");
    const [nic, setNic] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [lane, setLane] = useState("");
    const [serviceType, setserviceType] = useState("");
    const [date, setDate] = useState("");

    const { id } = useParams();

    useEffect(() => {

        getRequest();
    }, []);
    function getRequest() {
        axios
            .get(`http://localhost:8070/service/get/${id}`)
            .then((res) => {
                console.log(res.data);
                setfullName(res.data.ServiceRequest.fullName);
                setNic(res.data.ServiceRequest.nic);
                setMobileNo(res.data.ServiceRequest.mobileNo);
                setEmail(res.data.ServiceRequest.email);
                setAddress(res.data.ServiceRequest.address);
                setLane(res.data.ServiceRequest.lane);
                setserviceType(res.data.ServiceRequest.serviceType);
                setDate(res.data.ServiceRequest.date);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (

        <div>
            <Sidebar />

            <div id="main">

                <div class="row m-5">
                    <h2><b>Request - {serviceType}</b></h2>
                </div>

                <div className="row mt-5">
                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3" >
                                    <label for="name">Name
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={fullName}
                                        disabled
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3" >
                                    <label for="name">NIC
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={nic}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Mobile Number
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={mobileNo}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Email
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={email}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Address
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={address}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Request Service Type
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={serviceType}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Lane
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={lane}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div class="form-group">
                            <div className="row ms-5">
                                <div class="col-3">
                                    <label for="name">Requested Date
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={date}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row m-5">
                    <div className="col-2">
                        <Link to='/allrequests'>
                            <button type="submit" className="btn btn-success">Go Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
