import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/style.css";

// import "./assets/img/portfolio";

const Hero = () => {
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
                            <div class="icon-box">
                                <i class="ri-ball-pen-fill"></i>
                                <h3><a href="">Grama Niladhari Registration</a></h3>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <div class="icon-box">
                                <i class="ri-question-fill"></i>
                                <h3>Request a Service</h3>
                            </div>
                            </a>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <div class="icon-box">
                                <i class="ri-file-list-2-fill"></i>
                                <h3><a href="">My Job Requests</a></h3>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4">
                            <div class="icon-box">
                                <i class="ri-calendar-check-fill"></i>
                                <h3><a href="">Appointments with Grama Niladhari</a></h3>
                            </div>
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

                </div>
            </section>
        </>
    )
}

export default Hero;