import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import swal from "sweetalert";


function SpecialNeedsView() {
    const [specialNeed, setSpecialNeeds] = useState([]);
    const status = "Accepted";

    useEffect(() => {
        function getSpecialNeeds() {
            axios
                .get("http://localhost:8070/SpecialNeed/pending")
                .then((res) => {
                    setSpecialNeeds(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getSpecialNeeds();
    }, []);


    
    const [name, setName] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");


    function sendData(specialNeedRef) {

        const newSpecialNeed = {
            status
        };

        axios
            .put(`http://localhost:8070/SpecialNeed/update/status/${specialNeedRef}`, newSpecialNeed)

        const newDonator = {
            specialNeedRef,
            name,
            phone1,
            phone2,
            address,
            email
        };

        axios
            .post("http://localhost:8070/donator/add", newDonator)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "Sent Successfully",
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

            setTimeout(() => {
                window.location.reload();
            }, 2000);


        setName("");
        setPhone1("");
        setPhone2("");
        setAddress("");
        setEmail("");
    }



    function sendFeedback(id) {

        const newSpecialNeed = {
            status
        };

        axios
            .put(`http://localhost:8070/SpecialNeed/update/status/${id}`, newSpecialNeed)
            .then(() => {
                swal({
                    title: "Feedback Sent !",
                    text: "Plese Wait for a response from the Grama Niladhari",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: err,
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.reload();
        }, 2000);

    }


    return (
        <>
            <Header />

            <section id="about" class="about" data-aos="fade-up">

                <div class="section-title m-5">
                    <h2>Services</h2>
                    <p>Special Needs of poor people</p>
                </div>

                <div class="row m-5">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Full Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">LandLine Number</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">NIC</th>
                                <th scope="col">Special Request</th>
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
                                        <td>{val.phone1}</td>
                                        <td>{val.nic}</td>
                                        <td>{val.description}</td>
                                        <td align="center">
                                            <button type="reset" class="btn btn-outline-primary" onClick={() => document.getElementById('id01').style.display = 'block'}>
                                                Accept to help
                                            </button>

                                            <div class="w3-container">

                                                <div id="id01" class="w3-modal">
                                                    <div class="w3-modal-content w3-card-4 w3-animate-zoom" style={{ width: "600px" }}>

                                                        <div class="w3-center"><br />
                                                            <span onClick={() => document.getElementById('id01').style.display = 'none'} class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                                                        </div>

                                                        <div class="row m-3">
                                                            <div class="col-4">
                                                                <label for="search">Full Name</label>
                                                            </div>
                                                            <div class="col-7">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    onChange={(e) => {
                                                                        setName(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="row m-3">
                                                            <div class="col-4">
                                                                <label for="search">Mobile Number</label>
                                                            </div>
                                                            <div class="col-7">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    onChange={(e) => {
                                                                        setPhone1(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="row m-3">
                                                            <div class="col-4">
                                                                <label for="search">Mobile Number (alt.)</label>
                                                            </div>
                                                            <div class="col-7">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    onChange={(e) => {
                                                                        setPhone2(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="row m-3">
                                                            <div class="col-4">
                                                                <label for="search">Address</label>
                                                            </div>
                                                            <div class="col-7">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    onChange={(e) => {
                                                                        setAddress(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="row m-3">
                                                            <div class="col-4">
                                                                <label for="search">Email</label>
                                                            </div>
                                                            <div class="col-7">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    onChange={(e) => {
                                                                        setEmail(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="w3-container w3-border-top w3-padding-16 w3-light-grey"  >
                                                            <div className="row justify-content-between">
                                                                <div className="col-3">
                                                                    <button onClick={() => document.getElementById('id01').style.display = 'none'} type="button" class="w3-button w3-red" style={{borderRadius:"5px"}}>Cancel</button>
                                                                </div>
                                                                <div className="col-3">
                                                                    <button onClick={() => sendData(val._id)} type="button" class="w3-button w3-green" style={{borderRadius:"5px"}}>Send</button>
                                                                </div>
                                                            </div>


                                                        </div>



                                                    </div>
                                                </div>
                                            </div>



                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div class="row mt-5">
                        <Link to={`/`}><button type="submit" class="btn btn-primary">
                            Go Back
                        </button></Link>
                    </div>
                </div>
            </section>



            <Footer />


        </>
    );
}

export default SpecialNeedsView;