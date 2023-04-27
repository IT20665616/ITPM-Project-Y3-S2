import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar  from "../Hansi/GramaNiladhariUI/Sidebar";
//import Sidebar from '../Hansi/GramaNiladhariUI/Sidebar';
//get forum data
function RegisterPersonForm() {

	const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [address, setAddress] = useState([]);
    const [address2, setAddress2] = useState([]);
    const [village, setVillage] = useState([]);
    const [position, setPosition] = useState([]);
    const [idfront, setIdFront] = useState([]);
	const [idback, setIdBack] = useState([]);
	const [policeReport, setPoliceReport] = useState([]);


    function sendData(e) {
        e.preventDefault();

        const newEmployee = {
            name,
            phone,
            address,
            address2,
			village,
			position,
            idfront,
            idback,
            policeReport
        };

        axios
            .post("http://localhost:8070/registerPerson/addPerson", newEmployee)
            .then((res) => {
				console.log(res.data);
                swal({
                    title: "Success!",
                    text: "Added Successfully",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Something went wrong..Try Again !",
                    type: "error",
                });
            });

        // setTimeout(() => {
        //     window.location.replace("http://localhost:3000/addSpecialNeed");
        // }, 2000);

        setName([]);
        setPhone([]);
        setAddress([]);
        setAddress2([]);
        setVillage([]);
		setPosition([]);
        setIdFront([]);
        setIdBack([]);
		setPoliceReport('');

    }

	return (
		<>

            <Sidebar />
            <div id="main">

                <form onSubmit={sendData}>

                    <div class="row m-5">
                        <h3><b>Register poor people as Employees</b></h3>
                    </div>

                    <div class="form-group">
                        <div className="row m-5">
                            <div class="col-3">
                                <label for="name">Full Name 
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
                                <label for="code">Mobile Number<span style={{ color: "red" }}><sup>*</sup></span></label>
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
                                        setPhone(e.target.value);
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
                                <label for="price">City<span style={{ color: "red" }}><sup>*</sup></span></label>

                            </div>
                            <div class="col-4">
                                <textarea
                                    class="form-control"
                                    id="address"
                                    rows="3"
                                    required
                                    onChange={(e) => {
                                        setAddress2(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">Village<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setVillage(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

					<div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">Position<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setPosition(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

					<div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">NIC Front side<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setIdFront(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>


					<div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">NIC Back side<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    required
                                    onChange={(e) => {
                                        setIdBack(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="description" class="form-label">Police Report<span style={{ color: "red" }}><sup>*</sup></span></label>
                            </div>
                            <div class="col-4">
                                <input
                                    class="form-control"
                                    id="description"
                                    tyle="text"
                                    required
                                    onChange={(e) => {
                                        setPoliceReport(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                   
                    <div class="row m-5">
                        <div className="col-1">
                            <Link to={`/sidebar`}><button type="submit" class="btn btn-outline-success">
                                Back
                            </button></Link>
                        </div>
                        <div className="col-2">
                            <button type="submit" class="btn btn-outline-primary">
                                Create Employee
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

export default RegisterPersonForm;
