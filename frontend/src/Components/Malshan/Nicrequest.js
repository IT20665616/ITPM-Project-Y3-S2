import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Nicrequest() {
  const [nic, setNic] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  function sendData(e) {
    e.preventDefault();

    const newRequest = {
      nic,
    };

    console.log(newRequest);
    axios.post("http://localhost:8070/service/get", newRequest).then((res) => {
      if (res.data) {
        setData(res.data);
        setClick(true);

      } else {
        console.log("unsuccess");
      }
    });
  }

  return (
    <div>
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

        <button
          onClick={sendData}
          className="btn btn-outline-primary w-100 mt-4 rounded-pill"
          type="button"
        >
          Submit
        </button>
      </form>

      <div>
        {click && 
        <Nicviewpage data={data} />
        }
      </div>
    </div>
  );
}

function Nicviewpage(props) {
  useEffect(() => {
    console.log(props.data);
  }, []);

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

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
