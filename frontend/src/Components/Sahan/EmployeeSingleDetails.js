import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Hansi/GramaNiladhariUI/Sidebar";
import FileBase64 from "react-file-base64";
import swal from "sweetalert";
import axios from "axios";

function EmployeeSingleDetails(prop) {

  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const [address2, setAddress2] = useState([]);
  const [village, setVillage] = useState([]);
  const [position, setPosition] = useState([]);
  const [nic, setIdFront] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [policeReport, setPoliceReport] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    function getEmployee() {
      axios
        .get(`http://localhost:8070/registerPerson/get/${id}`)
        .then((res) => {
          console.log(res.data);

          if (res.data.Status) {
            setName(res.data.registerPerson.name);
            setPhone(res.data.registerPerson.phone);
            setAddress(res.data.registerPerson.address);
            setAddress2(res.data.registerPerson.address2);
            setVillage(res.data.registerPerson.village);
            setPosition(res.data.registerPerson.position);
            setIdFront(res.data.registerPerson.nic);
            setWorkExperience(res.data.registerPerson.workExperience);
            setPoliceReport(res.data.registerPerson.policeReport);
          }
          console.log(name);
          console.log(phone);
          console.log(address);
        })
        .catch((err) => {
          alert(err.message);
        });

    }
    getEmployee();
  }, []);


  function update(e) {
    e.preventDefault();

    const newEmployee = {
      name,
      phone,
      address,
      address2,
      village,
      position,
      nic,
      workExperience,
      policeReport
    };

    axios
      .put(`http://localhost:8070/registerPerson/update/${id}`, newEmployee)
      .then(() => {
        swal({
          title: "Success!",
          text: "UPDATED Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't UPDATE your Product",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  }



  function deleteEmp() {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(() => {
        axios.delete(`http://localhost:8070/registerPerson/delete/${id}`);
        swal({
          title: "Success!",
          text: "Deleted record Successfully",
          icon: "success",
          timer: 2500,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't Delete your Request",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/personSearch");
    }, 3000);
  }

  return (
    <>
      <Sidebar />
      <div id="main">

        <form onSubmit={update}>

          <div class="row m-5">
            <h3><b>Details of Employee - {name}</b></h3>
          </div>

          <div class="form-group">
            <div className="row m-5">
              <div class="col-3">
                <label for="name">Full Name</label>
              </div>
              <div class="col-4">
                <input
                  class="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="code">Mobile Number</label>
              </div>

              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  id="phone1"
                  value={phone}
                  pattern="\d{10}"
                  placeholder={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>


          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="price">Address</label>

              </div>
              <div class="col-4">
                <textarea
                  class="form-control"
                  id="address"
                  rows="3"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>


          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="price">City</label>

              </div>
              <div class="col-4">
                <input
                  class="form-control"
                  id="address"
                  value={address2}
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>


          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="price">Village</label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  id="nic"
                  value={village}
                  onChange={(e) => {
                    setVillage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="price">Position</label>
              </div>
              <div class="col-4">
                <select
                  className="form-select"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                >
                  <option disabled={true} value="">
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
            <div class="row m-5">
              <div class="col-3">
                <label for="nicFront">NIC</label>
              </div>
              <div class="col-4">
                <input
                  class="form-control"
                  value={nic}
                  onChange={(e) => {
                    setIdFront(e.target.value);
                  }}
                />

              </div>
            </div>
          </div>


          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="nicBack">Work Experience</label>
              </div>
              <div class="col-4">
                <textarea
                  class="form-control"
                  rows={3}
                  value={workExperience}
                  onChange={(e) => {
                    setWorkExperience(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row m-5">
              <div class="col-3">
                <label for="policeReport" class="form-label">Police Report</label>
              </div>
              <div class="col-4">
                  <a href={policeReport} download="police-report.jpeg">
                    <button type="button" class="btn btn-secondary">Download police report</button>
                  </a>
              </div>
            </div>
          </div>


          <div class="row m-5">
            <div className="col-2">
              <Link to={`/personSearch`}><button type="submit" class="btn btn-outline-success">
                Go Back
              </button></Link>
            </div>
            <div className="col-3">
              <button type="submit" class="btn btn-outline-primary">
                Update Request
              </button>
            </div>
            <div className="col-3">
              <button type="button" onClick={() => deleteEmp()} class="btn btn-outline-danger">
                Delete Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployeeSingleDetails;
