import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function EditOfficer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [registrationCertificate, setRegistrationCertificate] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [workingArea, setWorkingArea] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8070/officers/${id}`)
      .then((res) => {
        if (res.data.success) {
          setName(res.data.officer.name);
          setNIC(res.data.officer.NIC);
          setAddress(res.data.officer.address);
          setMobileNo(res.data.officer.mobileNo);
          setEmail(res.data.officer.email);
          setRegistrationCertificate(res.data.officer.registrationCertificate);
          setRegistrationNo(res.data.officer.registrationNo);
          setWorkingArea(res.data.officer.workingArea);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "NIC":
        setNIC(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "mobileNo":
        setMobileNo(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "registrationCertificate":
        setRegistrationCertificate(value);
        break;
      case "registrationNo":
        setRegistrationNo(value);
        break;
      case "workingArea":
        setWorkingArea(value);
        break;
      default:
        break;
    }
  };


  const onSubmit = (e) => {
    e.preventDefault();

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
        text: `Name: ${name} | NIC: ${NIC} | Address: ${address} |
            Mobile No: ${mobileNo} | Email: ${email} | Registration No: ${registrationNo} |
            Working Area: ${workingArea}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.put(`http://localhost:8070/officers/update/${id}`, data)
            .then((res) => {
              if (res.data.success) {
                setName("");
                setNIC("");
                setAddress("");
                setMobileNo("");
                setEmail("");
                setRegistrationCertificate("");
                setRegistrationNo("");
                setWorkingArea("");
              }
            })
            .catch((err) => console.log(err));
          swal("Successfully Updated!", { icon: "success" });
        } else {
          swal("Updation is not completed!");
        }
      });
    }
  };

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
        Update - User Profile
      </h1>
      <br />
      <form>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} htmlFor="exampleInputPassword1"><b>Full Name:</b></label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Kamal Perera"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} htmlFor="exampleInputEmail1"><b>NIC :</b></label>
          <input
            type="text"
            className="form-control"
            name="NIC"
            aria-describedby="emailHelp"
            placeholder="782873998V"
            value={NIC}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputPassword1"><b>Address:</b></label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="24,Lotus Road, Colombo"
            value={address}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <div className="form-group">
            <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputPassword1">
              <b>Mobile Number:</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="mobileNo"
              placeholder="0769102802"
              value={mobileNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <br></br>
          <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputEmail1"><b>Email Address:</b></label>
          <input
            type="text"
            class="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="kamal@gmail.com"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputPassword1"><b>Registration Certificate:</b></label>
          <input
            type="file"
            className="form-control"
            name="registrationCertificate"
            placeholder="A"
            accept='.jpeg, .png, .jpg'
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputPassword1"><b>Registration Number:</b></label>
          <input
            type="text"
            className="form-control"
            name="registrationNo"
            placeholder="......"
            value={registrationNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label style={{ marginBottom: '5px', fontSize: '19px' }} for="exampleInputPassword1"><b>Working Area:</b></label>
          <input
            type="text"
            className="form-control"
            name="workingArea"
            placeholder="Bambalapitiya"
            value={workingArea}
            onChange={handleInputChange}
            required
          />
        </div>

        <br />
        <div className="container" style={{ width: "170px" }}>
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-primary"
            style={{
              width: "150px",
              fontSize: "large",
              backgroundColor: "MidnightBlue",
            }}
          >
            Update
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}

