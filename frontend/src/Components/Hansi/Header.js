import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/style.css";


const Header = () => {
    return (
        <>
            <header id="header" class="fixed-top ">
                <div class="container d-flex align-items-center justify-content-lg-between">

                    <h1 class="logo me-auto me-lg-0"><a href="index.html">
                        <img src="assets/img/logoBlack.png" />
                    </a></h1>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <Link to="/"><li><a class="nav-link scrollto active" href="#hero">Home</a></li></Link>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <Link to="/login">
                        <button class="get-started-btn scrollto">
                            Log In
                        </button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;