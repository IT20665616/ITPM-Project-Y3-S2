import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import '../Sahan/StyleSheet.css';
import '../Sahan/FormStyles.css';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

import { useParams } from "react-router-dom";


function RegisterUpdate() {
    const [register, setregister] = useState([]);
    useEffect(() => {
      function getregister() {
        axios
          .get("http://localhost:8070/registerPerson/")
          .then((res) => {
            setregister(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getregister();
    }, []);
  
    function deleteRegister(id) {
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
            timer: 2000,
            button: false,
          });
        })
        .catch((err) => {
          swal({
            title: "Error!",
            text: "Coulden't Delete your Product",
            type: "error",
          });
        });
  
     /* setTimeout(() => {
        window.location.replace("http://localhost:3000/update");
      }, 5000);*/
    }
  
    //pdf generating
    function jsPdfGenerator() {
  
      //new document in jspdf
      var doc = new jsPdf('p', 'pt');
  
  
      doc.autoTable({ html: '.table' })
  
      doc.autoTable({
        columnStyles: { europe: { halign: 'center' } },
        margin: { top: 10 },
      })
  
      //save the pdf
      doc.save("Saved list.pdf");
    }
  
  
    return (
      <>
      
        <section className="info-box2">
          <div className="font">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">phone</th>
                  <th scope="col">addr 1</th>
                  <th scope="col">addr 2</th>
                  <th scope="col">village</th>
                  <th scope="col">position</th>
                  <th scope="col">id front</th>
                  <th scope="col">id back</th> 
                  <th scope="col">police report</th> 
                </tr>
              </thead>
              <tbody>
                {register.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.name}</td>
                      <td >{val.phone}</td>
                      <td >{val.inputAddress}</td>
                      <td >{val.inputAddress2}</td>
                      <td >{val.village}</td>
                      <td >{val.position}</td>
                      <td >{val.position}</td>
                      <td >{val.position}</td>
                      <td >{val.position}</td>
                      <td width="10px">
                        <Link to={`/edit/${val._id}`}>
                          <button type="submit" class="btn btn-outline-secondary">
                            Update
                          </button>
                        </Link>
                        <br />
                        <br />
  
                        <button
                          class="btn btn-outline-success"
                          type="submit"
                          onClick={() => deleteRegister(val._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
  
              </tbody>
            </table>
          </div>
        </section>
        <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
          <input type="button" value="Print Pdf" onClick={() => jsPdfGenerator()} className="btn btn-warning" />
        </div>
  
        <br/><br/>
     
      </>
    );
  }
  export default RegisterUpdate;
  