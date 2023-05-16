import React, { useState, useEffect } from "react";

import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      <div className="container shadow my-5  col-md-5 d-flex  align-items-center  justify-content-center form order-2">
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Your Name
            </label>
            <input
              value={fullName}
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
              value={nic}
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
              value={mobileNo}
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
              value={email}
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
              value={address}
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
              value={lane}
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
              value={serviceType}
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
             type="date"
              value={date}
             
              className="form-control"
              name="email"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <button
              onClick={updatedata}
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
