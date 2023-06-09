// const express = require("express");
const router = require("express").Router();
//const serviceRoute = require("../../Models/Malshan/service");
//const { json } = require("express");
let ServiceRequest = require("../../Models/Malshan/service");



router.route("/add").post((req, res) => {
  
  const fullName = req.body.fullName;
  const nic = req.body.nic;
  const mobileNo = Number(req.body.mobileNo);
  const email = req.body.email;
  const address = req.body.address;
  const lane = req.body.lane;
  const serviceType = req.body.serviceType;
  const date = String(req.body.date);

  const newService = new ServiceRequest({
    fullName,
    nic,
    mobileNo,
    email,
    address,
    lane,
    serviceType,
    date,
  });

  newService
    .save()
    .then(() => {
      res.json("success");
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

/***********************/
//RETRIEVE function

//we use get method to fetch data from the database

router.route("/").get((req, res) => {
  ServiceRequest.find()
    .then((Reqservices) => {
      res.json(Reqservices);
    })
    .catch((err) => {
      console.log(err);
    });
});

/**********************/
// UPDATE function

//we are taking the perticuler object id from the url
//don't forget to put :
//we use put method to update details

router.route("/update/:id").put(async (req, res) => {
  let requestID = req.params.id;

  const { fullName, nic, mobileNo, email, address, lane, serviceType, date } =
    req.body;

  const updateRequest = {
    fullName,
    nic,
    mobileNo,
    email,
    address,
    lane,
    serviceType,
    date,
  };

  const update = await ServiceRequest.findByIdAndUpdate(
    requestID,
    updateRequest
  )

    .then(() => {
      res.status(200).send({ status: "Request Updated Successfully !" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({
          status: "Database couldn't update properly",
          updateRequest: update,
        });
    });
});

/*******************************/

// DELETE Function
//we use delete method to delete data from the database

router.route("/delete/:id").delete(async (req, res) => {
  let requestId = req.params.id;

  await ServiceRequest.findByIdAndDelete(requestId)
    .then(() => {
      res.status(200).send({ status: "Request deletion successful !" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error in deletion" });
    });
});

/******************************/
// RETRIEVE function (one at a time)

router.route("/get/:id").get(async (req, res) => {
  let requestId = req.params.id;

  const request = await ServiceRequest.findById(requestId)
    .then((request) => {
      res
        .status(200)
        .send({ Status: "Special need fetched", ServiceRequest: request });
    })
    .catch((err) => {
      res.status(500).send({ Status: "Special need fetching unsuccessfull !" });
    });
});

//fetch data using NIC

router.route("/get").post(async (req, res) => {
  try {
    console.log(req.body)
    const customer = await ServiceRequest.find({ nic: req.body.nic });
    if (!customer) {
      return res.status(400).json({ message: "customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// router.route("/getByNic").get(async (req, res) => {
//   try {
//       const special_need = await ServiceRequest.find({nic: req.body.nic});
//       if (!special_need) {
//         return res.status(400).json({ message: 'customer not found' });
//       }
//       res.json(special_need);
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
// })

module.exports = router;
