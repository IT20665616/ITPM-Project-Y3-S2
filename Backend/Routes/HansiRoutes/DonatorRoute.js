const router = require("express").Router();
let Donator = require('../../Models/Hansi/DonatorModel');

//{ http://localhost:8070/donator/add }

router.route("/add").post((req, res) => {

    const specialNeedRef = req.body.specialNeedRef;
    const dname = req.body.dname;
    const dphone1 = req.body.dphone1;
    const dphone2 = req.body.dphone2;
    const daddress = req.body.daddress;
    const demail = req.body.demail;

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

    // const donator = await Donator.find({specialNeedRef: req.params.specialNeedRef})
    // .then((Donator) => {
    //         res.status(200).send({ Status: "Donator fetched", Donator: Donator })
    //     }).catch((err) => {
    //         res.status(500).send({ Status: "Donator fetching unsuccessfull !", err });
    //     })
    try {
        const donator = await Donator.find({specialNeedRef: req.params.specialNeedRef});
        if (!donator) {
          return res.status(400).json({ message: 'customer not found' });
        }
        res.json(donator);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }

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

