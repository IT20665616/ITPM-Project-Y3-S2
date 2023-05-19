import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./stylesheet.css";

const Sidebar = () => {

  const userId = sessionStorage.getItem('userID');

    useEffect(() => {
        function getUser() {

            axios
                .get(`http://localhost:8080/officer/${userId}`)
                .then((res) => {
                    // setName(res.data.name);
                    // setEmail(res.data.email);
                    // setmobileNo(res.data.mobileNo);
                    // setProfileImg(res.data.profileImg);
                })
        }
        getUser();
    }, []);


    function logout() {
        sessionStorage.clear();
        window.location.replace("http://localhost:3000/");
    }

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
              <li><a href="/userProfile" class="nav-link scrollto active"><i class="bx bx-user-pin"></i> <span>My Profile</span></a></li>
              <li><a href="/searchSpecialNeed" class="nav-link scrollto"><i class="bx bx-donate-heart"></i> <span>Add Special Needs</span></a></li>
              <li><a href="/allrequests" class="nav-link scrollto"><i class="bx bx-file"></i> <span>Customer Requests</span></a></li>
              <li><a href="/personSearch" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Employees</span></a></li>
              <li><a href="/appoitments" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>My Appointments</span></a></li>
              <li><Link to="/" class="nav-link scrollto"> <span>
                <button class="btn btn-danger" onClick={logout}>
                  Log Out
                </button>
              </span></Link></li>
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