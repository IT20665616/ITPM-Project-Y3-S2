import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";
import FileBase64 from "react-file-base64";
import Sidebar from "../../Hansi/GramaNiladhariUI/Sidebar";

export default function UserProfile() {
    const [name, setName] = useState([]);
    const [nic, setNic] = useState([]);
    const [mobileNo, setMobileNo] = useState([]);
    const [email, setEmail] = useState([]);
    const [address, setAddress] = useState([]);
    // const [regNo, setRegNo] = useState([]);
    const [workingArea, setWorkingArea] = useState([]);
    // const [regCertificate, setRegCertificate] = useState([]);
    const [password, setPassword1] = useState([]);

    const userId = sessionStorage.getItem('userID');


    useEffect(() => {
        axios.get(`http://localhost:8070/officer/get/${userId}`)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    setName(res.data.Officers.name);
                    setNic(res.data.Officers.nic);
                    setAddress(res.data.Officers.address);
                    setMobileNo(res.data.Officers.mobileNo);
                    setEmail(res.data.Officers.email);
                    setWorkingArea(res.data.Officers.workingArea);
                    setPassword1(res.data.Officers.password);
                }
            })
            .catch((err) => console.log(err));
    }, []);


    function updateData() {
        const newGN = {
            name,
            nic,
            email,
            mobileNo,
            address,
            workingArea,
            password
        };

        axios
            .put(`http://localhost:8070/officer/update/${userId}`, newGN)
            .then(() => {
                swal({
                    title: "Success !",
                    text: "Update Successfully..",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });

                setTimeout(() => {
                    window.location.replace("http://localhost:3000/userProfile");
                }, 2000);
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Something went wrong..Try Again !",
                    type: "error",
                });
            });
    }

    function deleteAccount() {

            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover these details!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(() => {
                    axios.delete(`http://localhost:8070/officer/delete/${userId}`);
                    swal({
                        title: "Success!",
                        text: "Deleted record Successfully",
                        icon: "success",
                        timer: 2500,
                    });

                    sessionStorage.clear();

                    setTimeout(() => {
                        window.location.replace("http://localhost:3000");
                    }, 3000);
                })
                .catch((err) => {
                    swal({
                        title: "Error!",
                        text: "Coulden't Delete your Request",
                        type: "error",
                    });
                });

            
        }

        return (

            <div>
                <Sidebar />

                <div id="main">

                    <div class="section-title m-5">
                       
                        <p>My Profile</p>
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
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
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
                                            value={nic}
                                            onChange={(e) => {
                                                setNic(e.target.value);
                                            }}
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
                                            value={mobileNo}
                                            onChange={(e) => {
                                                setMobileNo(e.target.value);
                                            }}
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
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
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
                                            value={address}
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div class="form-group">
                                <div className="row ms-5">
                                    <div class="col-3">
                                        <label for="name">Working Area
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={workingArea}
                                            onChange={(e) => {
                                                setWorkingArea(e.target.value);
                                            }}
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
                                        <label for="name">Password
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword1(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row m-5">
                        <div className="col-2">
                            <button type="submit" className="btn btn-success" onClick={updateData}>Update Profile</button>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-danger" onClick={deleteAccount}>Delete Profile</button>
                        </div>
                    </div>


                </div >
            </div >
        );
    }
