import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";
import FileBase64 from "react-file-base64";
import Header from "../../Hansi/Header";
import Footer from "../../Hansi/Footer";

export default function Registration() {
    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [regNo, setRegNo] = useState("");
    const [workingArea, setWorkingArea] = useState("");
    const [regCertificate, setRegCertificate] = useState("");
    const [password, setPassword1] = useState("");
    const [confirmPassword, setPassword2] = useState("");

    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword1(event.target.value);
        if (event.target.value === confirmPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setPassword2(event.target.value);
        if (event.target.value === password) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };


    function sendData(e) {
        e.preventDefault();
        if (passwordsMatch) {
            const newGN = {
                name,
                nic,
                email,
                mobileNo,
                address,
                regNo,
                workingArea,
                regCertificate,
                password
            };

            axios
                .post("http://localhost:8070/officer/add", newGN)
                .then(() => {
                    swal({
                        title: "Registration Success !",
                        text: "Please Login to access your profile..",
                        icon: "success",
                        timer: 2000,
                        button: false,
                    });

                    setTimeout(() => {
                        window.location.replace("http://localhost:3000/");
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

        else {
            swal({
                title: "Error!",
                text: "Passwords are not matching",
                type: "error",
            });
        }

    }

    return (

        <div>
            <Header />

            <section id="about" class="about" data-aos="fade-up">

                <div class="section-title m-5">
                    <h2>Services</h2>
                    <p>Grama Niladhari Registration</p>
                </div>

                <form onSubmit={sendData}>
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
                                            id="name"
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
                                            id="name"
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
                                            id="name"
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
                                            id="name"
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
                                        <label for="name">Registration Number
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            onChange={(e) => {
                                                setRegNo(e.target.value);
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
                                        <label for="name">Working Area
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            onChange={(e) => {
                                                setWorkingArea(e.target.value);
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
                                        <label for="name">Registration Certificate
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <div className='form-control'>
                                            <FileBase64
                                                type="file"
                                                class="form-control"
                                                id="nicFront"
                                                required
                                                onDone={({ base64 }) => setRegCertificate(base64)}
                                            />
                                        </div>
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
                                        <label for="name">Create Password
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="name"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div class="form-group">
                                <div className="row ms-5">
                                    <div class="col-3">
                                        <label for="name">Confirm Password
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <input
                                            type="password"
                                            class="form-control"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-5">
                        <div className="col-2">
                            <button type="submit" className="btn btn-success">Register</button>
                        </div>
                    </div>

                </form>

            </section >
            <Footer />
        </div >
    );
}
