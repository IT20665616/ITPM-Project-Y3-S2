import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

export default function AllRequests() {

const[requests, setrequests] = useState([]);

useEffect(()=>{
    function getAllRequests(){
        axios.get("").then((res) =>{
            setrequests(res.data);
        }).catch((err) =>{
            alert(err.message);
        })
    }
    getAllRequests();
}, [])

function deleteRequest(id){
    swal({
        title: 'Are You Sure?',
        text: 'Once deleted, You will not able to recover these details !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#30085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
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
      }).catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't Delete your Account",
          type: "error",
        });
      });

      setTimeout(() => {
        window.location.replace("http://localhost:3000/");
      }, 7000)

}


  return (
    <div>
         <div className="container py-5 ">
            <table id="my-table" class="table table-hover">
                <thead className="table-active">
                    <tr>
                        <th></th>
                        <th>fullName</th>
                        <th> nic</th>
                        <th>mobileNo</th>
                        <th>email</th>
                        <th>address</th>
                        <th> lane</th>
                        <th>serviceType</th>
                        <th>date</th>

                    </tr>
                </thead>
                </table>
                     
        </div>
    </div>
  )
}
