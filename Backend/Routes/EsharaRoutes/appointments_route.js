

const express = require("express");
const router = express.Router();
const appointment = require("../../Models/Eshara/appointments");

//Get all appoinments
router.get ("/appointments", async (req, res, next) => {
    let appointments;
    try {
        appointments = await appointment.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!appointments) {
      return res.status(404).json({ message: "No appointments found" });
    }
    return res.status(200).json({ 
      success: true,
      existingappointments: appointments
    });
  });

    //add new appoinment
  router.post ("/appointment/add", async (req, res, next) => {
    const { 
        name, 
        NIC, 
        email, 
        mobileNo, 
        description, 
        date,
        time 
    } = req.body;
    let apt;
    try {
      apt = new appointment({  
        name, 
        NIC, 
        email, 
        mobileNo, 
        description, 
        date,
        time 
      });
      await apt.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!apt) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ 
      success:"Appointment added successfully",
      appointment: apt
    });
  });


//Get specific appoinment
router.get("/appointment/:id",async(req,res,next) => {
    const id = req.params.id;
    let apt;
    try {
        apt = await appointment.findById(id)
    } catch (err) {
      console.log(err);
    }
    if (!apt) {
      return res.status(404).json({ message: "No appoinment found" });
    }
    return res.status(200).json({ 
      success:true,
      appointment: apt
    });
  });

  //Update specific appoinment
  router.put('/appointment/update/:id', async(req,res) => {
    const id = req.params.id;
    const { 
        name, 
        NIC, 
        email, 
        mobileNo, 
        description, 
        date,
        time
    } = req.body;
    let apt;
    try {
      apt = await appointment.findByIdAndUpdate(id, {
        name, 
        NIC, 
        email, 
        mobileNo, 
        description, 
        date,
        time
      });
      apt = await apt.save();
    } catch (err) {
      console.log(err);
    }
    if (!apt) {
      return res.status(404).json({ message: "Unable To update by this ID" });
    }
    return res.status(200).json({ 
      success: "Update Succesfully",
      appointment: apt 
    });
  });

//Delete specific appoinment
router.delete('/appointment/delete/:id' ,async(req,res) =>{
    const id = req.params.id;
    let apt;
    try {
        apt = await appointment.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!apt) {
      return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "Appoinment successfully deleted" });
  });



  module.exports = router;