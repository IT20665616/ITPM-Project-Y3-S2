import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import Header from "../../Hansi/Header";
import Footer from "../../Hansi/Footer";

function AppointmentCreate() {
  const [name, setfullName] = useState("");
  const [nic, setNic] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState();

  function sendData(e) {
    e.preventDefault();

    const newAppointment = {
        name,
        nic,
        email,
        mobileNo,
        description,
        date,
        time
    };

    axios
        .post("http://localhost:8070/appointment/add", newAppointment)
        .then(() => {
            swal({
                title: "Appointment Request Sent ..!",
                text: "Grama Niladhari will get back to you",
                icon: "success",
                timer: 2000,
                button: false,
            });

            setTimeout(() => {
                window.location.replace("http://localhost:3000/");
            }, 2000);
        })
        .catch((err) => {
            swal({
                title: "Error!",
                text: "Something went wrong..Try Again !",
                type: "error",
            });
        });

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
                    setDescription(e.target.value);
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


          <div class="form-group">
            <div className="row m-5">
              <div class="col-2" style={{ textAlign: "center" }}>
                <label for="name">Requesting Time
                  <span style={{ color: "red" }}><sup>*</sup></span></label>
              </div>
              <div class="col-3">
                <input
                  type="time"
                  class="form-control"
                  id="name"
                  required
                  placeholder=""
                  onChange={(e) => {
                    setTime(e.target.value);
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

export default AppointmentCreate;
