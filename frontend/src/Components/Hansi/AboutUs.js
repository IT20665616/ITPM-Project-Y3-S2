import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/css/style.css";

// import "./assets/img/portfolio";

const AboutUs = () => {
    return (
        <>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>About</h2>
                        <p>About our Services</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                            <h3>'DreamIt' is a new concept to improve poverty within the village or a city.</h3>
                            <p class="fst-italic">
                                The main service that we are planning to provide is to connect people with jobs to provide 
                                and poor people who like to work for daily wages and to people who are experties in perticular
                                areas. We have listed down all the services that can be provided by this web application.
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i> Gardening.</li>
                                <li><i class="ri-check-double-line"></i> Domestic and outdoor Cleaning.</li>
                                <li><i class="ri-check-double-line"></i> Polishing and Organizing.</li>
                                <li><i class="ri-check-double-line"></i> Eldery care.</li>
                                <li><i class="ri-check-double-line"></i> Security Services.</li>
                                <li><i class="ri-check-double-line"></i> Drivers.</li>
                                <li><i class="ri-check-double-line"></i> Car Washing.</li>
                                <li><i class="ri-check-double-line"></i> Courier Services.</li>

                            </ul>
                            <p>
                                By Using this web application you are not only getting your job done but helping a poor family to feed their children and 
                                to reduce poor helpless people by giving them a hand to stand on their own.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutUs;