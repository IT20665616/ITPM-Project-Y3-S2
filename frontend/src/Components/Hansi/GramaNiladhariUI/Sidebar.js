import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./stylesheet.css";

const Sidebar = () => {

  const [name, setName] = useState("");
  const userId = sessionStorage.getItem('userID');
  // const name = sessionStorage.getItem('name');

  useEffect(() => {
    function getUser() {

      axios
        .get(`http://localhost:8070/officer/get/${userId}`)
        .then((res) => {
          console.log(res.data.Officers);
          setName(res.data.Officers.name);
        })
    }
    getUser();
  }, []);


  function logout() {
    sessionStorage.clear();
    window.location.replace("http://localhost:3000");
  }

  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="sidebar">
        <div class="d-flex flex-column">

          <div class="profile">
            <img src={require("./Img/logoBlack.png")} />
            <h1 style={{ fontFamily: "Arial Rounded MT", fontSize: "25px", color: "white" }}>- {name} -</h1>
            {/* <h1 class="text-light"><a href="index.html">- {name} -</a></h1> */}
          </div>

          <div id="navbar" class="sidebar-nav-menu" style={{marginTop: "25px"}}>
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
            &copy; Copyright <strong><span></span></strong>
          </div>
          <div class="credits">
            Designed by Group 85
          </div>
        </div>
      </footer>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </>
  )
}

export default Sidebar;