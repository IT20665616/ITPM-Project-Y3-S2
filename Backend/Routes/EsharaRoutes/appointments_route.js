

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
  router.post ("/add", async (req, res, next) => {
    
    const name = req.body.name;
    const nic = req.body.nic;
    const email = req.body.email;
    const mobileNo = req.body.mobileNo;
    const description = req.body.description;
    const date = req.body.date;
    const time = req.body.time;
    const status = "Pending";

    const appObj = new appointment({
        name,
        nic,
        email,
        mobileNo,
        description,
        date,
        time,
        status
  
    })

    appObj.save().then(() => {
        res.json(appObj);

    }).catch((err) => {
        console.log(err);
    })
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
router.delete('/delete/:id' ,async(req,res) =>{
    const id = req.params.id;
    let apt;
    try {
        apt = await appointment.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
    if (!apt) {
      return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "Appoinment successfully deleted" });
  });


  router.route("/update/status/:id").put(async (req, res) => {

    let userID = req.params.id;

    const status = req.body.status;

    const newStatus = {
        status,
    }

    const update = await appointment.findByIdAndUpdate(userID, newStatus)

        .then(() => {
            res.status(200).send({ status: "Updated Successfully !" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Database couldn't update properly" })
        })
})



  module.exports = router;