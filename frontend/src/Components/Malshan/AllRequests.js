import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import jspdf from 'jspdf'
import 'jspdf-autotable'
import { Link } from 'react-router-dom';
import Sidebar from '../Hansi/GramaNiladhariUI/Sidebar';

export default function AllRequests() {

  const [requests, setrequests] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    function getAllRequests() {
      axios.get("http://localhost:8070/service/").then((res) => {
        setrequests(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getAllRequests();
  }, [])

  function deleteRequest(id) {
    swal({
      title: 'Are You Sure?',
      text: 'Once deleted, You will not able to recover these details !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      timer: 6000

    }).then(() => {
      axios
        .delete(`http://localhost:8070/service/delete/${id}`);
      swal({
        title: "Success!",
        text: "Deleted record Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      });

      setTimeout(() => {
        window.location.replace("http://localhost:3000/allrequests");
      }, 3000)

    }).catch((err) => {
      swal({
        title: "Error!",
        text: "Coulden't Delete the record",
        type: "error",
      });
    });



  }

  //pdf generating
  function jsPdfgenerator() {

    //new document in jspdf
    var doc = new jspdf('p', 'pt');
    const tableRows = requests.map((val) => [
      val.fullName,
      val.nic,
      val.mobileNo,
      val.email,
      val.address,
      val.lane,
      val.serviceType,
      val.date,
    ]);


    //doc.autoTable({  html:'#my-table' })

    doc.autoTable({
      head: [['Full Name', 'NIC', 'Mobile No', 'Email', 'Address', 'Lane', 'Service Type', 'Date']],
      body: tableRows,
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("request.pdf");
  }

  function filterRequestsByDate(requests, searchDate) {
    if (searchDate !== '') {
      return requests.filter((val) => val.date === searchDate);
    }
    return requests;
  }

  const filteredRequests = filterRequestsByDate(requests, searchDate);

  return (
    <div>
      <Sidebar />
      <div id='main'>

        <div class="container p-5">
          <div class="row">
            <h2><b>All Service Requests</b></h2>
          </div>

          <div class="row mt-5">
            <div class="col-3">
              <label for="search">Search by Date</label>
            </div>
            <div class="col-3">
              <input type="date"
                class="form-control"
                onChange={(e) => {
                  setSearchDate(e.target.value)
                }}
              />
            </div>
          </div>

          <div class="row mt-4">
            <div className="col-4">
              <button type="reset" class="btn btn-outline-primary" onClick={() => window.location.reload(true)}>
                Reset
              </button>
            </div>
          </div>

          <div className='row mt-5'>

            <table id="my-table" class="table table-hover table-responsive">
              <thead className="table-active">
                <tr>

                  <th>Full Name</th>
                  <th>NIC</th>
                  <th>Mobile Number</th>
                  <th>Service Type</th>
                  <th>Date</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((val, key) => {
                  return (
                    <tr style={{ backgroundColor: "white" }}>
                      <td>{val.fullName}</td>
                      <td>{val.nic}</td>
                      <td>{val.mobileNo}</td>
                      <td>{val.serviceType}</td>
                      <td>{val.date}</td>

                      <td>
                        <div className='row'>
                          <div className='col-4'>
                            <button className="btn btn-outline-danger"
                              onClick={() => deleteRequest(val._id)}>
                              delete
                            </button>
                          </div>
                          <div className='col-2'>
                            <Link to={`/details/${val._id}`}>
                            <button className="btn btn-outline-primary">
                              Details
                            </button>
                            </Link>
                          </div>
                        </div>

                      </td>
                    </tr>


                  )
                })}
              </tbody>
            </table>
          </div>

          <div class="row mt-4">
            <div className="col-4">
              <input type="button" value="Print Pdf" onClick={() => jsPdfgenerator()} className="btn btn-warning" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
