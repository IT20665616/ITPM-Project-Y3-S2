import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/css/style.css";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

// import "./assets/img/portfolio";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default HomePage;