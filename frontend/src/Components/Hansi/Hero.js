import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/style.css";

// import "./assets/img/portfolio";

const Hero = () => {

    const [nic, setNic] = useState("");

    return (
        <>
            <section id="hero" class="d-flex align-items-center justify-content-center">
                <div class="container" data-aos="fade-up">

                    <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                        <div class="col-xl-6 col-lg-8">
                            <h1>The poor need change, not coins<span>...</span></h1>
                            <h2>It is the time to fight, are you ready to contribute?</h2>
                        </div>
                    </div>

                    <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                        <div class="col-xl-2 col-md-4">
                            <Link to={`/regGM`}>
                                <div class="icon-box">
                                    <i class="ri-ball-pen-fill"></i>
                                    <h3><a href="/officers">Grama Niladhari Registration</a></h3>
                                </div>
                            </Link>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <Link to={`/request`}>
                                <div class="icon-box">
                                    <i class="ri-question-fill"></i>
                                    <h3><a href="">Request a Service</a></h3>
                                </div>
                            </Link>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <div class="icon-box">
                                <i class="ri-file-list-2-fill"></i>
                                <button class="btn myBtn" onClick={() => document.getElementById('id01').style.display = 'block'} style={{ color: "white" }}>
                                    <h3><a>
                                        My Job Requests
                                    </a></h3>
                                </button>

                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <Link to={`/addAppointment`}>
                                <div class="icon-box">
                                    <i class="ri-calendar-check-fill"></i>
                                    <h3><a href="/appointments">Appointments with Grama Niladhari</a></h3>
                                </div>
                            </Link>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <Link to={`/viewSpecialNeed`}>
                                <div class="icon-box">
                                    <i class="ri-service-fill"></i>
                                    <h3><a href="">Hand-In-Need</a></h3>
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/* w3 model */}

                    <div class="w3-container">

                        <div id="id01" class="w3-modal">
                            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style={{ width: "600px" }}>

                                <div class="w3-center"><br />
                                    <span onClick={() => document.getElementById('id01').style.display = 'none'} class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                                </div>

                                <div class="row m-3">
                                    <div class="col-4">
                                        <label for="search">Please provide your same NIC you used to create your request</label>
                                    </div>
                                    <div class="col-7">
                                        <input type="text"
                                            class="form-control"
                                            onChange={(e) => {
                                                setNic(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="w3-container w3-border-top w3-padding-16 w3-light-grey"  >
                                    <div className="row justify-content-between">
                                        <div className="col-3">
                                            <button onClick={() => document.getElementById('id01').style.display = 'none'} type="button" class="w3-button w3-red" style={{ borderRadius: "5px" }}>Cancel</button>
                                        </div>
                                        <div className="col-3">
                                            <Link to={`/nic/${nic}`}>
                                                <button type="button" class="w3-button w3-green" style={{ borderRadius: "5px" }}>Send</button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero;