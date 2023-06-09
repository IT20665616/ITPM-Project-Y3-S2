const router = require("express").Router();
let Donator = require('../../Models/Hansi/DonatorModel');

//{ http://localhost:8070/donator/add }

router.route("/add").post((req, res) => {

    const date = new Date();

    let day = date.getDate();
    let month = "0" + (date.getMonth() + 1);
    let year = date.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;

    const specialNeedRef = req.body.specialNeedRef;
    const dname = req.body.dname;
    const dphone1 = req.body.dphone1;
    const dphone2 = req.body.dphone2;
    const daddress = req.body.daddress;
    const demail = req.body.demail;
    const createdDate = currentDate;

    const DonatorObject = new Donator({
        specialNeedRef,
        dname,
        dphone1,
        dphone2,
        daddress,
        demail
    })

    DonatorObject.save().then(() => {
        res.json(DonatorObject);

    }).catch((err) => {
        console.log(err);
    })

})

router.route("/request/:specialNeedRef").get(async (req, res) => {

      const donator = await Donator.find({specialNeedRef: req.params.specialNeedRef})

        .then((donator) => {
            res.status(200).send({ donator })
        }).catch((err) => {
            res.status(500).send({ Status: "Special need fetching unsuccessfull !" });
        })

})

/*******************************************************************/
//RETRIEVE function

router.route("/").get((req, res) => {
    Donator.find().then((Donator) => {
        res.json(Donator);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;

