import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import swal from "sweetalert";
import Header from "../Hansi/Header";
import Footer from "../Hansi/Footer";


function NicResults() {


  const { nic } = useParams();
  const [data, setData] = useState([]);


  useEffect(() => {
    sendData();
  }, []);


  const requestdelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once you delete this,You can't recover details!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,

    })
      .then(() => {
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
          window.location.replace(`http://localhost:3000`);
        }, 2000);

        window.location.reload();

      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't Delete your Account",
          type: "error",
        });
      });
  }


  function sendData() {

    const newRequest = {
      nic: nic
    };

    axios.post("http://localhost:8070/service/get", newRequest).then((res) => {
      if (res.data) {
        // console.log(res.data)
        setData(res.data);


        console.log(res.data);

      } else {
        console.log("unsuccess");
      }
    });
  }


  return (
    <div>
      <Header />

      <section id="about" class="about" data-aos="fade-up">

        <div class="section-title m-5">
          <h2>Services</h2>
          <p>Manage All Requests</p>
        </div>

        <div className="row m-5">

          <table id="my-table" class="table table-hover">
            <thead className="table-active">
              <tr>
                <th scope="col" ></th>
                <th scope="col" width="150px">Full Name</th>
                <th scope="col" width="100px"> NIC</th>
                <th scope="col" width="150px">Mobile Number</th>
                <th scope="col" width="150px">Email</th>
                <th scope="col" width="150px">Address</th>
                {/* <th scope="col"> lane</th> */}
                <th scope="col">Service Type</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.nic}</td>
                  <td>{item.mobileNo}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  {/* <td>{item.lane}</td> */}
                  <td>{item.serviceType}</td>
                  <td>{item.date}</td>
                  <td width="170px">
                    <div className="row">
                      <div className="col-6">
                        <Link to={`/editRequest/${item._id}`}>
                          <button type="submit" class="btn btn-primary">
                            Update
                          </button>
                        </Link>
                      </div>
                      <div className="col-6">
                        <button class="btn btn-danger" type="submit" onClick={() => requestdelete(item._id)} >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="col-4">
              <Link to={`/`}>
                <button type="submit" class="btn btn-success">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

export default NicResults;