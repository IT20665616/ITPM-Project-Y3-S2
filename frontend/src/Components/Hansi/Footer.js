import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/css/style.css";

// import "./assets/img/portfolio";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="footer-info">
                                    <h3><span>Every person matters..</span></h3>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                    <div class="social-links mt-3">
                                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 col-md-6 mt-5 footer-newsletter">
                                <div class="row w-75">
                                    <img src="assets/img/logoBlack.png" />
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            {/* <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Vision</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Donations</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Employment</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Charity</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Imrove</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div> */}

                            
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>DreamIt</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="https://bootstrapmade.com/">Group 85</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;