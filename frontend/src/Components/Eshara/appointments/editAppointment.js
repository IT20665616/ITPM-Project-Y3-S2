// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import swal from "sweetalert";

// export default function EditAppointment() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//           const [name, setName] = useState("");
//           const [NIC, setNIC] = useState("");
//           const [mobileNo, setMobileNo] = useState("");
//           const [email, setEmail] = useState("");
//           const [description, setDescription] = useState("");
//           const [date, setDate] = useState("");
//           const [time, setTime] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:8070/appointment/${id}`)
//       .then((res) => {
//         if (res.data.success) {
//           setName(res.data.appointment.name);
//           setNIC(res.data.appointment.NIC);
//           setMobileNo(res.data.appointment.mobileNo);
//           setEmail(res.data.appointment.email);
//           setDescription(res.data.appointment.description);
//           setDate(res.data.appointment.date);
//           setTime(res.data.appointment.time);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
  
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "NIC":
//         setNIC(value);
//         break;
//       case "mobileNo":
//         setMobileNo(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "description":
//         setDescription(value);
//         break;
//       case "date":
//         setDate(value);
//         break;
//       case "time":
//         setTime(value);
//         break;
//       default:
//         break;
//     }
//   };
  

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       name: name,
//       NIC: NIC,
//       mobileNo: mobileNo,
//       email: email,
//       description: description,
//       date: date,
//       time: time,
//     };


//   //validations
//   const fname = /^[a-zA-Z]/;
//   const nic = /^\d{9}[vV]$/;
//   const mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
//   const num = /^\d{10}$/;

//   if (
//     name === "" ||
//     NIC === "" ||
//     email === "" ||
//     mobileNo === "" ||
//     description === "" ||
//     date === "" ||
//     time === "" 
//   ) {
//     swal(
//       "Please fill the form correctly",
//       "Form values cannot be empty",
//       "error"
//     );
    

//   } 
//   else if ((!fname.test(String(name)))) {
//       swal("Invalid Name", "There should be characters only!", "error");
//   }
//   else if ((!nic.test(String(NIC)))) {
//       swal("Invalid NIC", "Wrong NIC Format, Ex: 748723777V", "error");
//   }
//   else if ((!num.test(String(mobileNo)))) {
//       swal("Invalid Mobile Number", "There should be 10 digits, Ex: 0761237663", "error");
//   }
//   else if ((!mail.test(String(email)))) {
//       swal("Invalid Email Address", "Wrong Format, Ex: example@example.com", "error");
//   }

//      else {
//       swal({
//         title: "Are you sure?",
//         text: `Name: ${name} | NIC: ${NIC} |
//             Mobile No: ${mobileNo} | Email: ${email} | Description: ${description} |
//             Date: ${date} | Time: ${time}`,
//         icon: "info",
//         buttons: true,
//         dangerMode: true,
//       }).then((willDelete) => {
//         if (willDelete) {
//           axios.put(`http://localhost:8070/appointment/update/${id}`, data)
//             .then((res) => {
//               if (res.data.success) {
//                 setName("");
//                 setNIC("");
//                 setMobileNo("");
//                 setEmail("");
//                 setDescription("");
//                 setDate("");
//                 setTime("");
//               }
//             })
//             .catch((err) => console.log(err));
//           swal("Successfully Updated!", { icon: "success" });
//         } else {
//           swal("Updation is not completed!");
//         }
//       });
//     }
//   };

//   return (
//     <div className="container" style={{ width: "540px" }}>
//       <h1
//               className="text-center"
//               style={{
//                 borderStyle: "solid",
//                 backgroundColor: "MidnightBlue",
//                 color: "white",
//               }}
//             >
//               Update - Appointment
//             </h1>
//       <br />
//       <form>
//         <div className="form-group">
//           <label style={{ marginBottom: '5px',fontSize:'19px' }} htmlFor="exampleInputPassword1"><b>Full Name:</b></label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             placeholder="Kamal Perera"
//             value={name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <br></br>      
//         <div className="form-group">
//           <label style={{ marginBottom: '5px',fontSize:'19px' }} htmlFor="exampleInputEmail1"><b>NIC :</b></label>
//           <input
//             type="text"
//             className="form-control"
//             name="NIC"
//             aria-describedby="emailHelp"
//             placeholder="782873998V"
//             value={NIC}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <br></br> 
        
//               <div className="form-group">
//                 <div className="form-group">
//                   <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1">
//                   <b>Mobile Number:</b>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="mobileNo"
//                     placeholder="0769102802"
//                     value={mobileNo}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <br></br> 
//                 <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>Email Address:</b></label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   name="email"
//                   aria-describedby="emailHelp"
//                   placeholder="kamal@gmail.com"
//                   value={email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <br></br> 
              
//               <div className="form-group">
//                 <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Description:</b></label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="description"
//                   value={description}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <br></br> 
//               <div>
//               <label style={{ marginBottom: '5px',fontSize:'19px' }} className="topic"><b>Date: </b></label>
//                         <input type="Date"
//                           className="form-control"
//                           name="date"
//                           placeholder="Select Date"
//                           value={date}
//                           onChange={handleInputChange} required/>
//                       </div>

//                       <div className="form-group" style={{ marginBottom: '15px' }}><br></br>
//                         <label style={{ marginBottom: '5px',fontSize:'19px' }} className="topic"><b>Time: </b></label>
//                         <input type="Time"
//                           className="form-control"
//                           name="time"
//                           value={time}
//                           onChange={handleInputChange} required/>
//                       </div>

//         <br />
//         <div className="container" style={{ width: "170px" }}>
//           <button
//             type="submit"
//             onClick={onSubmit}
//             className="btn btn-primary"
//             style={{
//               width: "150px",
//               fontSize: "large",
//               backgroundColor: "MidnightBlue",
//             }}
//           >
//             Update
//           </button>
//         </div>
//       </form>
//       <br />
//     </div>
//   );
// }


