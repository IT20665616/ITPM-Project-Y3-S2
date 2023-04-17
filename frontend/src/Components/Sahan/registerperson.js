import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";
export default function Test1(){

  const [name,set_name]=useState("");
  const [phone,set_phone]=useState("");
  const [inputAddress,setinputAddress]=useState("");
  const [inputAddress2,setinputAddress2]=useState("");
  const [village,set_village]=useState("");
  const [position,set_position]=useState("");
  const [idfront,set_idfront]=useState("");
  const [idback,set_idback]=useState("");
  const [policeReport,set_policeReport]=useState("");
  const sendData = async (e) => {
      e.preventDefault();

      
      
      let registerPerson = {

          
          
           name:name,
           phone:phone,
           inputAddress:inputAddress,
           inputAddress2:inputAddress2,
           village:village,
           position:position,
           idfront:idfront,
           idback:idback,
           policeReport:policeReport


      }

  
      axios.post("http://localhost:8070/registerPerson/addPerson",registerPerson)
      .then(()=>{
        swal({
          title: "Success!",
          text: "Add Employee Details Successfully",
          icon: "success",
          timer: 200,
          button: false,
        });
         
          window.location = "/cashupdate"
      }).catch((err)=>{
          alert("error in cash del frontend route")
      })
   


      
      set_name("");
      set_phone("");
      setinputAddress("");
      setinputAddress2("");
      set_village("");
      set_position("");
      set_idfront("");
      set_idback("");
      set_policeReport("");
     
  }

    return(
        <div className="container">

          

            <div className="container">
                <h1 >person registration Details</h1>
                
                </div>
            



            <form onSubmit={sendData} className="row g-3">
       
       
        <div className="col-md-6">
          <label htmlFor="d_cus" className="form-label">person name</label>
          <input type="text" className="form-control" id="name"
            onChange={(e)=>{
              set_name(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">employee phone number</label>
          <input type="text" className="form-control" id="phone"
            onChange={(e)=>{
              set_phone(e.target.value);
    
            }}/>
        </div>



        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
            onChange={(e)=>{
              setinputAddress(e.target.value);
    
            }}/>
        </div>



        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
            onChange={(e)=>{
              setinputAddress2(e.target.value);
    
            }}/>
        </div>

        <div className="col-md-6">
          <label htmlFor="village" className="form-label">village name</label>
          <input type="text" className="form-control" id="village"
            onChange={(e)=>{
              set_village(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-4">
          <label htmlFor="position" className="form-label">job position</label>
          <input type="text" className="form-control" id="position"
            onChange={(e)=>{
              set_position(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">add NIC front photo</label>
          <input type="text" className="form-control" id="idfront"
          onChange={(e)=>{
            set_idfront(e.target.value);
  
          }}/>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">add NIC back photo</label>
          <input type="text" className="form-control" id="idback"
          onChange={(e)=>{
            set_idback(e.target.value);
  
          }}/>
        </div>


        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">add police report photo</label>
          <input type="text" className="form-control" id="policeReport"
          onChange={(e)=>{
            set_policeReport(e.target.value);
  
          }}/>
        </div>




       
        <div className="col-12">

          <center>  <button type="submit" className="btn btn-primary">proceed details</button></center>
        
        </div>
      </form>
      </div>
        
    )

}
