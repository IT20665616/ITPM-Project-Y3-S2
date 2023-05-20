import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditRegisterForm(props) {
    const [name, set_name] = useState("");
	const [phone, set_phone] = useState("");
	const [inputAddress, setinputAddress] = useState("");
	const [inputAddress2, setinputAddress2] = useState("");
	const [village, set_village] = useState("");
	const [position, set_position] = useState("");
	const [idfront, set_idfront] = useState("");
	const [idback, set_idback] = useState("");
	const [policeReport, set_policeReport] = useState("");
      const { id } = useParams();
      
     
      useEffect(() => {
          function getregisterPerson() {
              axios
                  .get(`http://localhost:8070/registerPerson/get/${id}`)
                  .then((res) => {
  
                      if (res.data.status) {
                          set_name(res.data.registerPerson.name);
                          set_phone(res.data.registerPerson.phone);
                          setinputAddress(res.data.registerPerson.inputAddress);
                          setinputAddress2(res.data.registerPerson.inputAddress2);
                          set_village(res.data.registerPerson.village);
                          set_position(res.data.registerPerson.position);
                          set_idfront(res.data.registerPerson.idfront);
                          set_idback(res.data.registerPerson.idback);
                          set_policeReport(res.data.registerPerson.policeReport);
                          





                      }
                  })
                  .catch((err) => {
                      alert(err.message);
                  });
          }
          getregisterPerson();
      }, []);
  
  
      function update(e) {
          e.preventDefault();
  
  
          const data = {
            name,
			      phone,
            inputAddress,
            inputAddress2,
            village,
            position,
            idfront,
            idback,
            policeReport,
          };
  
          axios
              .put(`http://localhost:8070/registerPerson/update/${id}`, data)
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
                      text: "Coulden't UPDATE registration details",
                      type: "error",
                  });
              });
  
          setTimeout(() => {
              window.location.replace("http://localhost:3000/update");
          }, 2500);
  
      }
  
      return (
          <>
        
            <section className="payment-form ">
              <br />
            
              <br/><br/>
              <h3>Edit Employee Details</h3>
              <br />
              <form onSubmit={update}>
  
                {/* employee name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Employee name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    placeholder="card holder's name"
                    value={name}
                    onChange={(e) => {
                      set_name(e.target.value);
                    }}
                  />
                </div>
  
                    {/* phone number */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                    placeholder="enter phone number"
                    
                    onChange={(e) => {
                      set_phone(e.target.value);
                    }}
                   />
   
                </div>
  
                {/* inputAddress */}
                <div className="mb-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Adderss 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    required
                    placeholder="enter Address,"
                    value={inputAddress}
                    onChange={(e) => {
                      setinputAddress(e.target.value);
                    }}
                  />
                </div>
  
                {/* inputAddress2 */}
                <div className="mb-3">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    value={inputAddress2}
                    placeholder="enter inputAddress2"
                    onChange={(e) => {
                      setinputAddress2(e.target.value);
                    }}
                  />
                </div>
  
                {/* village */}
                <div className="mb-3">
                  <label htmlFor="village" className="form-label">
                    Village Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="village"
                    required
                    placeholder="Enter village name"
                    value={village}
                    onChange={(e) => {
                      set_village(e.target.value);
                    }}
                  
                  />
                </div>
            {/* position */}
            <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                  position
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    required
                    placeholder="Enter Job position"
                    value={position}
                    onChange={(e) => {
                      set_position(e.target.value);
                    }}
                  />
                </div>
      
               {/* idfront */}
            <div className="mb-3">
                  <label htmlFor="idfront" className="form-label">
                  NIC front Photo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="idfront"
                    required
                    placeholder="upload NIC front Photo"
                    value={idfront}
                    onChange={(e) => {
                      set_idfront(e.target.value);
                    }}
                  />
                </div>


                {/* idback */}
            <div className="mb-3">
                  <label htmlFor="idback" className="form-label">
                  NIC back Photo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="idback"
                    required
                    placeholder="Enter NIC back Photo"
                    value={idback}
                    onChange={(e) => {
                      set_idback(e.target.value);
                    }}
                  />
                </div>


                {/* policeReport */}
            <div className="mb-3">
                  <label htmlFor="policeReport" className="form-label">
                  policeReport photo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeReport"
                    required
                    placeholder="Upload policeReport photo"
                    value={policeReport}
                    onChange={(e) => {
                      set_policeReport(e.target.value);
                    }}
                  />
                </div>
  
                <div>
                  <center>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </center>
                </div>
              </form>
            </section>
      
          
          </>
        );
  }
  export default (EditRegisterForm);
 