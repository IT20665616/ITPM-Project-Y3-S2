import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import jsPdf from 'jspdf';
import 'jspdf-autotable';

export default class appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
       appointments: [],
    };
  }

  componentDidMount() {
    this.retrieveAppointments();
  }

  retrieveAppointments() {
    axios.get("http://localhost:8070/appointments").then((res) => {
      console.log("hello");
      if (res.data.success) {
        this.setState({
            appointments: res.data.existingappointments,
        });

        console.log(this.state.appointments);
      }
    });
  }

  onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the details of this appointment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8070/appointment/delete/${id}`).then((res) => {
          swal(
            "Delete Successfully!",
            "Appointment is removed",
            "success"
          );

          this.retrieveappointments();
        });
      } else {
        swal("Appointment is not deleted!");
      }
    });
  };

  filterData = (searchKey) => {
    const { appointments } = this.state;
    const result = appointments.filter((appointment) => {
      const {
        name,
        NIC,
        email,
        date,
        time
      } = appointment;
      return (
        name.toLowerCase().includes(searchKey) ||
        NIC.toLowerCase().includes(searchKey) ||
        email.toLowerCase().includes(searchKey) ||
        date.toLowerCase().includes(searchKey) ||
        time.toLowerCase().includes(searchKey)
      );
    });
    this.setState({ appointments: result });
  };
  

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    this.filterData(searchKey);
  };
  

  //Report pdf generation

   jsPdfGenerator = () => {

  //New document in jspdf
  var doc = new jsPdf('l', 'pt', 'a3');

  doc.text(600, 20, 'Appointments List', { align: 'center' },);
  doc.autoTable({ html: '#class-table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } },
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("appointments.pdf");
}


  render() {
    return (
      <div className="container">
        <center>
        <h1
          className="text-center"
          style={{
            borderStyle: "solid",
            backgroundColor: "MidnightBlue",
            color: "white",
            width: "500px",
          }}
        >
        Appointments
        </h1>
        </center>

        <br></br>
        <div className="col-md-5 mb-17">
          <form class="form-inline">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </form>
        </div>
        <br></br><br></br><br></br>

        <button
          className="btn btn-primary btn-lg active"
          style={{ backgroundColor: "#c99212" }}
        >
          <a
            href="appointments/add"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "large",
            }}
          >
            Add Appointment
          </a>
        </button>
        <button className="btn-primary" style={{ marginTop: '2px',marginLeft:'10px',padding:"9px", backgroundColor: '#000080', color:"white" }} onClick={this.jsPdfGenerator}><i className="fas fa-download"></i>&nbsp;Download Appointments List</button>

        <br></br><br></br><br></br>

        <table className="table table-striped" Id = "class-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appointments, index) => (
              <tr key={index}>
               
                <td>{appointments.name}</td>
                <td>{appointments.NIC}</td>
                <td>{appointments.email}</td>
                <td>{appointments.mobileNo}</td>
                <td>{appointments.date}</td>
                <td>{appointments.time}</td>
                <a
                  className="btn btn-warning"
                  href={`appointment/update/${appointments._id}`}
                >
                  <i className="fas fa-edit"> </i>&nbsp; Edit
                </a>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  style={{ color: "black" }}
                  onClick={() => this.onDelete(appointments._id)}
                >
                  <i
                    className="far fa-trash-alt"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "medium",
                    }}
                  >
                    {" "}
                  </i>{" "}
                  &nbsp; Delete
                </a>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      
    );
    
  } 
}