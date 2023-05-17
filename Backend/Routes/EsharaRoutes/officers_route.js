const express = require("express");
const router = express.Router();
const officer = require("../../Models/Eshara/officers");

//Get all vilage officers
router.get ("/", async (req, res, next) => {
    let officers;
    try {
        officers = await officer.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!officers) {
      return res.status(404).json({ message: "No officer found" });
    }
    return res.status(200).json({ 
      success: true,
      existingofficers: officers 
    });
  });

    //add new village officer
  router.post ("/add", async (req, res, next) => {
    const { 
        name, 
        NIC, 
        address, 
        mobileNo, 
        email, 
        registrationCertificate,
        registrationNo,
        workingArea
    } = req.body;
    let ofcr; 
    try {
      ofcr = new officer({  
        name, 
        NIC, 
        address, 
        mobileNo, 
        email, 
        registrationCertificate,
        registrationNo,
        workingArea
      });
      await ofcr.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!ofcr) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ 
      success:"Village Officer added successfully",
      officer: ofcr 
    });
  });


//Get specific village officer
router.get("/:id",async(req,res,next) => {
    const id = req.params.id;
    let ofcr;
    try {
        ofcr = await officer.findById(id)
    } catch (err) {
      console.log(err);
    }
    if (!ofcr) {
      return res.status(404).json({ message: "No village officer found" });
    }
    return res.status(200).json({ 
      success:true,
      officer: ofcr
    });
  });

  //Update specific village officer
  router.put('/update/:id', async(req,res) => {
    const id = req.params.id;
    const { 
        name, 
        NIC, 
        address, 
        mobileNo, 
        email, 
        registrationCertificate,
        registrationNo,
        workingArea
    } = req.body;
    let ofcr;
    try {
        ofcr = await officer.findByIdAndUpdate(id, {
            name, 
            NIC, 
            address, 
            mobileNo, 
            email, 
            registrationCertificate,
            registrationNo,
            workingArea
      });
      ofcr = await ofcr.save();
    } catch (err) {
      console.log(err);
    }
    if (!ofcr) {
      return res.status(404).json({ message: "Unable To update by this ID" });
    }
    return res.status(200).json({ 
      success: "Update Succesfully",
      officer:ofcr 
    });
  });

//Delete specific village officer
router.delete('/delete/:id' ,async(req,res) =>{
    const id = req.params.id;
    let ofcr;
    try {
        ofcr = await officer.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!ofcr) {
      return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "Village officer successfully deleted" });
  });



  module.exports = router;