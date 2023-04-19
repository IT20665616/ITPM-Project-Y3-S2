import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class registerOfficers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      NIC: "",
      address: "",
      mobileNo: "",
      email: "",
      registrationCertificate: "",
      registrationNo: "",
      workingArea: "",
    };
  }

  handleInputChange = async (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      this.setState({
        ...this.state,
        [name]: base64,
      });
    } else {
      this.setState({
        ...this.state,
        [name]: value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      NIC,
      address,
      mobileNo,
      email,
      registrationCertificate,
      registrationNo,
      workingArea,
    } = this.state;

    const data = {
      name: name,
      NIC: NIC,
      address: address,
      mobileNo: mobileNo,
      email: email,
      registrationCertificate: registrationCertificate,
      registrationNo: registrationNo,
      workingArea: workingArea,
    };

    console.log(data);

    //Validations
    const fname = /^[a-zA-Z]/;
    const nic = /^\d{9}[vV]$/;
    const mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    const num = /^\d{10}$/;
    const n = /^\d+$/;
    

    if (
      name === "" ||
      NIC === "" ||
      address === "" ||
      mobileNo === "" ||
      email === "" ||
      registrationCertificate === "" ||
      registrationNo === "" ||
      workingArea === ""
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
    else if ((!n.test(String(registrationNo)))) {
        swal("Invalid Registration Number", "There should be digits only!", "error");
    }
    else {
      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.name} | NIC: ${this.state.NIC} | Address: ${this.state.address} 
        Mobile No: ${this.state.mobileNo} | Email: ${this.state.email} | Registration No: ${this.state.registrationNo} |
        Working Area: ${this.state.workingArea}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.post("http://localhost:8070/officers/add", data).then((res) => {
            if (res.data.success) {
              this.setState({
                name: "",
                NIC: "",
                address: "",
                mobileNo: "",
                email: "",
                registrationCertificate: "",
                registrationNo: "",
                workingArea: "",
              });
            }
          });
          swal("Successfully Registered!", {
            icon: "success",
          });
        } else {
          swal("Registration is not completed!");
        }
      });
    }
  };


  render() {
    return (
      <div className="container" style={{ width: "540px" }}>
        <h1>Grama Sevaka Registration</h1>
        <br />
        <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <div className="form-group">
          <label style={{ marginBottom: '5px',fontSize:'19px' }} htmlFor="exampleInputPassword1">
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

        <div className="form-group">
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Address:</b></label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="24,Lotus Road, Colombo"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </div>
         
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
          </div>

        
      
        <div className="form-group">
          <label style={{ marginBottom: '5px',fontSize:'19px' }} htmlFor="exampleInputPassword1"><b>Registration Certificate:</b></label>
          <input
            type="file"
            className="form-control"
            name="registrationCertificate"
            accept='.jpeg, .png, .jpg'
            onChange={this.handleInputChange}
            required
          />
          <img src={this.state.registrationCertificate} alt=""/>
        </div>

        <div className="form-group">
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Registration Number:</b></label>
            <input
              type="text"
              className="form-control"
              name="registrationNo"
              placeholder="65389"
              value={this.state.registrationNo}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Working Area:</b></label>
            <input
              type="text"
              className="form-control"
              name="workingArea"
              placeholder="Bambalapitiya"
              value={this.state.workingArea}
              onChange={this.handleInputChange}
              required
            />
          </div>
      </div>
      <br/>
      <div className="container" style={{ width: "170px" }}>
        <button
          type="submit"
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
    </form>
    <br/>
  </div>
);
        }}



        function convertToBase64(file){
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
              reject(error)
            }
          })
        }


