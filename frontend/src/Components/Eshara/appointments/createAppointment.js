import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class createAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      NIC: "",
      email: "",
      mobileNo: "",
      description: "",
      date: "",
      time: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
        name,
        NIC,
        email,
        mobileNo,
        description,
        date,
        time,
    } = this.state;

    const data = {
      name: name,
      NIC: NIC,
      email: email,
      mobileNo: mobileNo,
      description: description,
      date: date,
      time: time,
    };

    console.log(data);

    //validations
    const fname = /^[a-zA-Z]/;
    const nic = /^\d{9}[vV]$/;
    const mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    const num = /^\d{10}$/;

    if (
      name === "" ||
      NIC === "" ||
      email === "" ||
      mobileNo === "" ||
      description === "" ||
      date === "" ||
      time === "" 
    ) {
      swal(
        "Please fill the form correctly",
        "Form values cannot be empty",
        "error"
      );
      

    } 
    else if ((!fname.test(String(name)))) {
        swal("Invalid Name", "There should be characters only!", "error");
    }
    else if ((!nic.test(String(NIC)))) {
        swal("Invalid NIC", "Wrong NIC Format, Ex: 748723777V", "error");
    }
    else if ((!num.test(String(mobileNo)))) {
        swal("Invalid Mobile Number", "There should be 10 digits, Ex: 0761237663", "error");
    }
    else if ((!mail.test(String(email)))) {
        swal("Invalid Email Address", "Wrong Format, Ex: example@example.com", "error");
    }
    else {
      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.name} | NIC: ${this.state.NIC} | Email: ${this.state.email} 
        Contact No: ${this.state.mobileNo} | Description: ${this.state.description} | Date: ${this.state.date} |
        Time: ${this.state.time}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.post("http://localhost:8070/appointment/add", data).then((res) => {
            if (res.data.success) {
              this.setState({
                name: "",
                NIC: "",
                email: "",
                mobileNo: "",
                description: "",
                date: "",
                time: "",
              });
            }
          });
          swal("Appointment Added Successfully!", {
            icon: "success",
          });
        } else {
          swal("Appointment is not completed!");
        }
      });
    }
  };

  render() {
    return (
      <div className="container" style={{ width: "540px" }}>
        <h1
          className="text-center"
          style={{
            borderStyle: "solid",
            backgroundColor: "MidnightBlue",
            color: "white",
          }}
        >
          Make an Appointment
        </h1>
        <br></br>
        <form>
        <div className="form-group">
            <div className="form-group">
              <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1">
                <b>Full Name:</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Kamal Perera"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            <br></br>
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>NIC :</b></label>
            <input
              type="text"
              class="form-control"
              name="NIC"
              aria-describedby="emailHelp"
              placeholder="782873998V"
              value={this.state.NIC}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <div className="form-group">
              <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1">
                <b>Mobile Number:</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="mobileNo"
                placeholder="0769102802"
                value={this.state.mobileNo}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <br></br>
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>Email Address:</b></label>
            <input
              type="text"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="kamal@gmail.com"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <br></br>
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>Description:</b></label>
            <input
              type="text"
              class="form-control"
              name="description"
              aria-describedby="emailHelp"
              value={this.state.description}
              onChange={this.handleInputChange}
              required
            />

           <br></br>
                        <label style={{ marginBottom: '5px',fontSize:'19px' }} className="topic"><b>Date: </b></label>
                        <input type="Date"
                          className="form-control"
                          name="date"
                          placeholder="Select Date"
                          value={this.state.date}
                          onChange={this.handleInputChange} required/>
                      </div>

                      <div className="form-group" style={{ marginBottom: '15px' }}><br></br>
                        <label style={{ marginBottom: '5px',fontSize:'19px' }} className="topic"><b>Time: </b></label>
                        <input type="Time"
                          className="form-control"
                          name="time"
                          value={this.state.time}
                          onChange={this.handleInputChange} required/>
                      </div>

          
          <br></br>
          <div className="container" style={{ width: "170px" }}>
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn btn-primary"
              style={{
                width: "150px",
                fontSize: "large",
                backgroundColor: "MidnightBlue",
              }}
            >
              Submit
            </button>
          </div>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}