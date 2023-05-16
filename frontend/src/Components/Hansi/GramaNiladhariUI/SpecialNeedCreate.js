import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import swal from "sweetalert";
import axios from "axios";

function SpecialNeedCreate() {
    const [name, setName] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [address, setAddress] = useState("");
    const [nic, setNic] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newSpecialNeed = {
            name,
            phone1,
            phone2,
            address,
            nic,
            description,
            amount
        };

        axios
            .post("http://localhost:8070/SpecialNeed/add", newSpecialNeed)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "Added Successfully",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });

                setTimeout(() => {
                    window.location.replace("http://localhost:3000/searchSpecialNeed");
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

    return (
        <>

            <Sidebar />
            <div id="main">

                <form onSubmit={sendData}>

                    <div class="row m-5">
                        <h3><b>Create a Special Need</b></h3>
                    </div>

                    <div class="form-group">
                        <div className="row m-5">
                            <div class="col-3">
                                <label for="name">Full Name of the person who has the special need
                                    <span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    required
                                    placeholder=""
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="code">Land Line Number<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>

                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone1"
                                    required
                                    pattern="\d{10}"
                                    placeholder="Ex: 011xxxxxxx"
                                    onChange={(e) => {
                                        setPhone1(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="code">Mobile Number<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone2"
                                    required
                                    pattern="\d{10}"
                                    placeholder="Ex: 077xxxxxxx"
                                    onChange={(e) => {
                                        setPhone2(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">Address<span style={{ color: "red" }}><sup>*</sup></span></label>

                            </div>
                            <div class="col-4">
                                <textarea
                                    class="form-control"
                                    id="address"
                                    rows="3"
                                    required
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">NIC<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setNic(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="description" class="form-label">Request<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <textarea
                                    class="form-control"
                                    id="description"
                                    rows="3"
                                    required
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">Amount (LKR)<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row m-5">
                        <div className="col-1">
                            <Link to={`/searchSpecialNeed`}><button type="submit" class="btn btn-outline-success">
                                Back
                            </button></Link>
                        </div>
                        <div className="col-2">
                            <button type="submit" class="btn btn-outline-primary">
                                Create Request
                            </button>
                        </div>
                        <div className="col-4">
                            <button type="reset" class="btn btn-outline-danger">
                                Clear Form
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SpecialNeedCreate;
