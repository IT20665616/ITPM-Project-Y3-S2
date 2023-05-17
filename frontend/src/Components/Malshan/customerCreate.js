import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import Sidebar from "../Hansi/GramaNiladhariUI/Sidebar";
import Header from "../Hansi/Header";
import Footer from "../Hansi/Footer";

function CustomerCreate() {
  const [fullName, setfullName] = useState("");
  const [nic, setNic] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [lane, setLane] = useState("");
  const [serviceType, setserviceType] = useState("");
  const [date, setDate] = useState();

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
        if (res.data === "success") {
          swal({
            title: "success",
            text: "request added successfully",
            icon: "success",
            timer: 2000,
            button: false,
          })

          setTimeout(() => {
            window.location.replace("http://localhost:3000/");
          }, 2000);

        }
        else {
          swal({
            title: "error",
            text: "couldn't add your request",
            type: "error",
          });
        }

      })


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
      <Header />

      <section id="about" class="about" data-aos="fade-up">

        <div class="section-title m-5">
          <h2>Services</h2>
          <p>Request your Service</p>
        </div>
        <form onSubmit={sendData}>

          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Name
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">NIC
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>


          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Mobile Number
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Email
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>


          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Address
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Request Service Type
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
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
            </div>
          </div>


          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Lane
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setLane(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Requesting Date
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="date"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-2 m-3" style={{ textAlign: "end" }}>
              <button type="submit" className="btn btn-primary">Send Request</button>
            </div>
            <div className="col-2 m-3" style={{ textAlign: "start" }}>
              <button type="submit" className="btn btn-danger">Clear Form</button>
            </div>
          </div>

        </form>
      </section>
      <Footer />
    </div>
  );
}

export default CustomerCreate;
