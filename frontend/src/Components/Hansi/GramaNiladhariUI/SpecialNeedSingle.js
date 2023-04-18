import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import swal from "sweetalert";
import axios from "axios";

function SpecialNeedSingle(prop) {

    const [name, setName] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [address, setAddress] = useState("");
    const [nic, setNic] = useState("");
    const [description, setDescription] = useState("");

    const { id } = useParams();

    useEffect(() => {
        function getSpecialNeed() {
            axios
                .get(`http://localhost:8070/SpecialNeed/get/${id}`)
                .then((res) => {

                    if (res.data.Status) {
                        setName(res.data.SpecialNeed.name);
                        setPhone1(res.data.SpecialNeed.phone1);
                        setPhone2(res.data.SpecialNeed.phone2);
                        setAddress(res.data.SpecialNeed.address);
                        setNic(res.data.SpecialNeed.nic);
                        setDescription(res.data.SpecialNeed.description);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getSpecialNeed();
    }, []);


    function update(e) {
        e.preventDefault();

        const newSpecialNeed = {
            name,
            phone1,
            phone2,
            address,
            nic,
            description
        };

        axios
            .put(`http://localhost:8070/SpecialNeed/update/${id}`, newSpecialNeed)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "UPDATED Successfully",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Coulden't UPDATE your Product",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/searchSpecialNeed");
        }, 3000);

    }


    function deleteSpecialNeed() {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover these details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(() => {
                axios.delete(`http://localhost:8070/SpecialNeed/delete/${id}`);
                swal({
                    title: "Success!",
                    text: "Deleted record Successfully",
                    icon: "success",
                    timer: 2500,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Coulden't Delete your Request",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/searchSpecialNeed");
        }, 3000);

    }



    return (
        <>
            <Sidebar />
            <div id="main">

                <form onSubmit={update}>

                    <div class="row m-5">
                        <h3><b>Update Special Need</b></h3>
                    </div>

                    <div class="form-group">
                        <div className="row m-5">
                            <div class="col-3">
                                <label for="name">Full Name of the person who has the special need
                                </label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    value={name}
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
                                <label for="code">Land Line Number</label>
                            </div>

                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone1"
                                    value={phone1}
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
                                <label for="code">Mobile Number</label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone2"
                                    value={phone2}
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
                                <label for="price">Address</label>

                            </div>
                            <div class="col-4">
                                <textarea
                                    class="form-control"
                                    id="address"
                                    rows="3"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    {/* <div class="form-check">
                        <div class="row m-5">
                            <div class="col-3">
                                <label class="form-check-label" for="exampleRadios1">Have an NIC (Age above 18)</label>
                            </div>
                            <div class="col-4">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    value="1"
                                    checked
                                    onChange={ } />
                            </div>
                        </div>
                    </div> */}


                    <div class="form-group">
                        <div class="row m-5">
                            <div class="col-3">
                                <label for="price">NIC</label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nic"
                                    value={nic}
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
                                <label for="description" class="form-label">Request</label>
                            </div>
                            <div class="col-4">
                                <textarea
                                    class="form-control"
                                    id="description"
                                    rows="3"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
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
                                Update Request
                            </button>
                        </div>
                        <div className="col-4">
                            <button type="button" onClick={() => deleteSpecialNeed()} class="btn btn-outline-danger">
                                Delete Request
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SpecialNeedSingle;
