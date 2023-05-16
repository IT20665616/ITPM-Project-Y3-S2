import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import swal from "sweetalert";


function Nicviewpage() {
    const {nic} = useParams();
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
            window.location.replace(`http://localhost:3000/nicRequestView/${id}`);
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
        nic:nic
      };
  
      axios.post("http://localhost:8070/service/get", newRequest).then((res) => {
        if (res.data) {
          setData(res.data);
         
  
          console.log(res.data);
      
        } else {
          console.log("unsuccess");
        }
      });
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
            <th>Action</th>
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
              <td>{item.lane}</td>
              <td  width="250px">{item.serviceType}</td>
              <td  width="250px" >{item.date}</td>
              <td width="150px">
                  <Link to={`/updateRequest/${item._id}`}>
                      <button type="submit" class="btn btn-success">
                        Update
                      </button></Link>
                      <br />
                      <br />

                      <button
                       class="btn btn-danger"
                        type="submit"
                        onClick={()=> requestdelete(item._id)}
                        >
                        Delete
                      </button>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  </div>
);
}

export default  Nicviewpage;