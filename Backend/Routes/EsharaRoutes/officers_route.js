const express = require("express");
const router = express.Router();
const officer = require("../../Models/Eshara/officers");

//Get all vilage officers
router.get("/", async (req, res, next) => {
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
router.post("/add", async (req, res, next) => {

  const name = req.body.name;
  const nic = req.body.nic;
  const email = req.body.email;
  const mobileNo = req.body.mobileNo;
  const address = req.body.address;
  const regNo = req.body.regNo;
  const workingArea = req.body.workingArea;
  const regCertificate = req.body.regCertificate;
  const password = req.body.password;

  const obj = new officer({
    name,
    nic,
    email,
    mobileNo,
    address,
    regNo,
    workingArea,
    regCertificate,
    password
  })

  obj.save().then(() => {
    res.json(obj);

  }).catch((err) => {
    console.log(err);
  })
});


/******************************************************************/
// UPDATE status and donator ref function

router.route("/update/:id").put(async (req, res) => {

  let userID = req.params.id;

  const { name, email, nic, address, workingArea, password, mobileNo } = req.body;

  const obj = {
    name,
    nic,
    email,
    mobileNo,
    address,
    workingArea,
    password
  }

  const update = await officer.findByIdAndUpdate(userID, obj)

    .then(() => {
      res.status(200).send({ status: "Updated Successfully !" })
    }).catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Database couldn't update properly", SpecialNeed: update })
    })
})


/*****************************************************************************************/

// DELETE Function
//we use delete method to delete data from the database

router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await officer.findByIdAndDelete(userID)
    .then(() => {
      res.status(200).send({ status: "Deletion successful !" });
    }).catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error in deletion" });
    })

})



router.get('/profile', async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await officer.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;

  const obj = await officer.findById(userID)
    .then((obj) => {
      res.status(200).send({ Status: "Special need fetched", Officers: obj })
    }).catch((err) => {
      res.status(500).send({ Status: "Special need fetching unsuccessfull !" });
    })
})


module.exports = router;