import React, { useState } from 'react'
import swal from "sweetalert";
import axios from "axios";


 function customerCreate() {

  const[fullName, setfullName] = useState();
  const[nic, setNic] =useState();
  const[mobileNo, setMobileNo ] =useState();
  const[email, setEmail] =useState();
  const[address, setAddress] =useState();
  const[lane, setLane] =useState();
  const[serviceType,  setserviceType] =useState();
  const[date , setDate] =useState();
  

  const newCustomer =[
    fullName,
    nic,
    mobileNo,
    email,
    address,
    lane,
    serviceType,
    date
  ]




    const submit = async (e) => {
        e.preventDefault();
  return (
    <div className="container">
    
    <form onSubmit={submit}>
      <div className='form-group'>
        <label htmlFor='username' className='form-label'>Your Name</label>
        <input className='form-control' name='username' onChange={e => setfullName(e.target.value)}></input>
      </div>
      <div className='form-group'>
       <label htmlFor='email' className='form-label'>NIC</label>
       <input className='form-control' name='email'onChange={ e => setNic(e.target.value)}></input>
      </div>

      <div className='form-group'>
       <label htmlFor='email' className='form-label'>Mobile No</label>
       <input className='form-control' name='email'onChange={ e => setMobileNo(e.target.value)}></input>
      </div>

      <div className='form-group'>
       <label htmlFor='email' className='form-label'>email </label>
       <input className='form-control' name='email'onChange={e =>setEmail(e.target.value)}></input>
      </div>
 

     
      <div className='form-group'>
       <label htmlFor='email' className='form-label'>address </label>
       <input className='form-control' name='email'onChange={ e=> setAddress(e.target.value) }></input>
      </div>
 

 
      <div className='form-group'>
       <label htmlFor='email' className='form-label'>Lane </label>
       <input className='form-control' name='email'onChange={}></input>
      </div>
 
 
 
      <div className='form-group'>
        <label htmlFor='occupation' className='form-label'>Requested service type</label>
        <select className='form-select' name='occupation' onChange={}>
          <option value='cleaning'> Cleaning</option>
          <option value={'employee'}>Gardening</option>
          <option value={'other'}>plumbing</option> 
          <option value='cleaning'> Cleaning</option>

         </select> 
      </div>

      
      <div className='form-group'>
       <label htmlFor='email' className='form-label'>Date </label>
       <input className='form-control' name='email'onChange={onChangeHandler}></input>
      </div>
 
 
    
    
 
      <div className='form-group'>
        <button className='btn' type='button' onClick={()=>console.log(formdata)}>Submit</button>
      </div>
    
     </form>
 
 
     
     </div>


  )
}



export default customerCreate();