import React, { useState, useEffect } from "react";

import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Hansi/Header";
import Footer from "../Hansi/Footer";

export default function EditRequest() {
  const [fullName, setfullName] = useState("");
  const [nic, setNic] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [lane, setLane] = useState("");
  const [serviceType, setserviceType] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();

  useEffect(() => {

    getRequest();
  }, []);
  function getRequest() {
    axios
      .get(`http://localhost:8070/service/get/${id}`)
      .then((res) => {
        console.log(res.data);
        setfullName(res.data.ServiceRequest.fullName);
        setNic(res.data.ServiceRequest.nic);
        setMobileNo(res.data.ServiceRequest.mobileNo);
        setEmail(res.data.ServiceRequest.email);
        setAddress(res.data.ServiceRequest.address);
        setLane(res.data.ServiceRequest.lane);
        setserviceType(res.data.ServiceRequest.serviceType);
        setDate(res.data.ServiceRequest.date);
      })
      .catch((err) => {
        alert(err.message);
      });
  }


  function updatedata(e) {
    e.preventDefault();

    const data = {
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
      .put(`http://localhost:8070/service/update/${id}`, data)
      .then(() => {
        swal({
          title: "Success!",
          text: " request UPDATED Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't UPDATE your request",
          type: "error",
        });
      });

    setTimeout(() => {
      window.history.back();
    }, 2500);
  }
  return (

    <div>
      <Header />

      <section id="about" class="about" data-aos="fade-up">

        <div class="section-title m-5">
          <h2>Services</h2>
          <p>You can edit your request</p>
        </div>

          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Name
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={fullName}
                  placeholder=""
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">NIC
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={nic}
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
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={mobileNo}
                  placeholder=""
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Email
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={email}
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
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={address}
                  placeholder=""
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Request Service Type
                  </label>
              </div>
              <div class="col-3">
                <select
                  selected={serviceType}
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
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={lane}
                  placeholder=""
                  onChange={(e) => {
                    setLane(e.target.value);
                  }}
                />
              </div>

              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Requesting Date
                  </label>
              </div>
              <div class="col-3">
                <input
                  type="date"
                  class="form-control"
                  id="name"
                  value={date}
                  placeholder=""
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-2" style={{ textAlign: "end" }}>
              <button type="submit" className="btn btn-primary" onClick={updatedata}>Update Request</button>
            </div>
          </div>

      </section>
      <Footer />
    </div>
  );
}
