import React, { useEffect } from "react";

export default function Nicviewpage(props) {
 
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

          <tbody>
             


          </tbody>
        </table>
      </div>
    </div>
  );
}
