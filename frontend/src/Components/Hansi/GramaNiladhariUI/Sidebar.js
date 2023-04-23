import React from 'react';
// import "./assets/css/styles.css"
// import "./assets/img"
import { NavLink } from 'react-router-dom';
import "./stylesheet.css";

const Sidebar = () => {
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="sidebar">
        <div class="d-flex flex-column">

          <div class="profile">
            <img src={require("./Img/profile-img.jpg")} class="img-fluid rounded-circle" />
            <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div id="navbar" class="sidebar-nav-menu">
            <ul>
              <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-donate-heart"></i> <span>Home</span></a></li>
              <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="http://localhost:3000/allrequests" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>all requests</span></a></li>
              <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </header>

      <footer id="sidebar-footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>iPortfolio</span></strong>
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </>
  )
}

export default Sidebar;