import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import Header from "../../Hansi/Header";
import Footer from "../../Hansi/Footer";

export default class officers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      officers: [],
    };
  }

  componentDidMount() {
    this.retrieveOfficers();
  }

  retrieveOfficers() {
    axios.get("http://localhost:8070/officers").then((res) => {
      console.log("hello");
      if (res.data.success) {
        this.setState({
            officers: res.data.existingofficers,
        });

        console.log(this.state.officers);
      }
    });
  }

  onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the details of the Officer!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8070/officers/delete/${id}`).then((res) => {
          swal(
            "Delete Successfully!",
            "Village officer's details are removed",
            "success"
          );

          this.retrieveofficers();
        });
      } else {
        swal("The Village Officer's details are not deleted!");
      }
    });
  };


  filterData = (searchKey) => {
    const { officers } = this.state;
    const result = officers.filter((officer) => {
      const {
        name,
        NIC,
        email,
        registrationNo,
        workingArea
      } = officer;
      return (
        name.toLowerCase().includes(searchKey) ||
        NIC.toLowerCase().includes(searchKey) ||
        email.toLowerCase().includes(searchKey) ||
        registrationNo.toLowerCase().includes(searchKey) ||
        workingArea.toLowerCase().includes(searchKey)
      );
    });
    this.setState({ officers: result });
  };
  

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    this.filterData(searchKey);
  };

  //Report pdf generation

   jsPdfGenerator = () => {

  //New document in jspdf
  var doc = new jsPdf('l', 'pt', 'a3');

  doc.text(600, 20, 'Grama Sevaka List', { align: 'center' },);
  doc.autoTable({ html: '#class-table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } },
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Grama sevaka list.pdf");
}


  render() {
    return (
      
      <div className="container">
        <Header />
        <br></br><br></br><br></br><br></br>       
           <h1
          className="text-center"
          style={{
            borderStyle: "solid",
            backgroundColor: "MidnightBlue",
            color: "orange",
          }}
        >
        Grama Sewaka
        </h1>

        <div className="col-md-5 mb-17">
        <form class="form-inline">
        <i class="fas fa-search" aria-hidden="true"></i>
          <input
          className="form-control form-control-sm ml-3 w-75"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
          </form>
        </div> 

        <br></br>
        <table className="table table-striped" Id = "class-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email</th>
              <th scope="col">Registration No</th>
              <th scope="col">Working Area</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.officers.map((officers, index) => (
              <tr key={index}>
               
                <td>{officers.name}</td>
                <td>{officers.NIC}</td>
                <td>{officers.mobileNo}</td>
                <td>{officers.email}</td>
                <td>{officers.registrationNo}</td>
                <td>{officers.workingArea}</td>
                <a
                  className="btn btn-warning"
                  href={`officers/update/${officers._id}`}
                >
                  <i className="fas fa-edit"> </i>&nbsp; Edit
                </a>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  style={{ color: "black" }}
                  onClick={() => this.onDelete(officers._id)}
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


                <a
                  className="btn btn-primary"
                  href={`officers/${officers._id}`}
                  style={{ color: "black" }}
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
                  &nbsp; View
                </a>

              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary btn-lg active"
          style={{ backgroundColor: "#c99212" }}
        >
          <a
            href="officers/add"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "large",
            }}
          >
            Add New Grama Sevaka
          </a>
        </button>
        
        <button className="btn-primary" 
        style={{ 
          marginTop: '15px',
          marginLeft:'10px',
          padding:"9px", 
          backgroundColor: '#000080',
          color: "white", 
          }} onClick={this.jsPdfGenerator}>
            <i className="fas fa-download"></i>&nbsp;Download Details</button>
            <br></br><br></br><br></br><br></br>          
              <Footer />

      </div>
      
      
    );

  } 
}