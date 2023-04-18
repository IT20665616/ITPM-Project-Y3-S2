import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";


function SpecialNeedsView() {
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
            <Header />

            <section id="about" class="about">
                <div class="container mt-5" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Services</h2>
                        <p>Special Needs of poor people</p>
                    </div>

                    <div class="row">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">LandLine Number</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">NIC</th>
                                    <th scope="col">Special Request</th>
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
                </div>
            </section>

            <Footer />


        </>
    );
}

export default SpecialNeedsView;