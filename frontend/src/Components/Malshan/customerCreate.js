import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
// import Sidebar from "../Hansi/GramaNiladhariUI/Sidebar";

function CustomerCreate() {
  const [fullName, setfullName] = useState("");
  const [nic, setNic] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [lane, setLane] = useState("");
  const [serviceType, setserviceType] = useState("");
  const [date, setDate] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newRequest = {
      fullName,
      nic,
      mobileNo,
      email,
      address,
      lane,
      serviceType,
      date,
    };


    axios
      .post("http://localhost:8070/service/add", newRequest)
      .then((res) => {
        console.log(res.data);
      if(res.data==="success"){
        swal({
          title: "success",
          text: "request added successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      }
      else{
        swal({
          title: "error",
          text: "couldn't add your request",
          type: "error",
        });
      }
        // alert(res.data);
       
      })
      
      // .catch((err) => {
        
      //  console.log(err);
       
      // });

    // setTimeout(() => {
    //   window.location.replace("http://localhost:3000");
    // }, 2000);

    setfullName("");
    setNic("");
    setMobileNo("");
    setEmail("");
    setAddress("");
    setLane("");
    setserviceType("");
    setDate("");
  }

  return (
<div>
    
    <div className="container shadow my-5  col-md-5 d-flex  align-items-center  justify-content-center form order-2">
      <form>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Your Name
          </label>
          <input
            className="form-control"
            name="username"
            onChange={(e) => {
              setfullName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            NIC
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setNic(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Mobile No
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            email{" "}
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            address{" "}
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Lane{" "}
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setLane(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="occupation" className="form-label">
            Requested service type
          </label>
          <select
            className="form-select"
            name="occupation"
            onChange={(e) => {
              setserviceType(e.target.value);
            }}
          >
            <option disabled={true} value="" selected hidden>
              --Choose service type--
            </option>
            <option value="gardening"> Gardening</option>
            <option value="domestic">Domestic and outdoor Cleaning</option>
            <option value="polishing">Polishing and Organizing</option>
            <option value="eldercare"> Eldery care</option>
            <option value="securityservice"> Security Services</option>
            <option value="driver"> Drivers</option>
            <option value="carwash"> Car Washing</option>
            <option value="currier"> Courier Services</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Date{" "}
          </label>
          <input
            className="form-control"
            name="email"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <button
            onClick={sendData}
            className="btn btn-outline-primary w-100 mt-4 rounded-pill"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CustomerCreate;
