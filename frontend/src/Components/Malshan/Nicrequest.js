import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";



export default function Nicrequest() {
  const [nic, setNic] = useState("");
 





  return (
    <div>
      <div className="container shadow my-5  col-md-5 d-flex  align-items-center  justify-content-center form order-2">
      <form>
        <label htmlFor="username" className="form-label">
          Your
        </label>
        <input
          className="form-control"
          name="nic"
          onChange={(e) => {
            setNic(e.target.value);
          }}
        ></input>

        <Link to={`/nicRequestView/${nic}`}>
        <button
          
          className="btn btn-outline-primary w-100 mt-4 rounded-pill"
          type="button"
        >
          Submit
        </button>

        </Link>
      </form>
      </div>
      <div>
       
       
       
      </div>
    </div>
  );
}



