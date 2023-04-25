const router = require("express").Router();
let Donator = require('../../Models/Hansi/DonatorModel');

//{ http://localhost:8070/donator/add }

router.route("/add").post((req, res) => {

    const specialNeedRef = req.body.specialNeedRef;
    const name = req.body.name;
    const phone1 = req.body.phone1;
    const phone2 = req.body.phone2;
    const address = req.body.address;
    const email = req.body.email;

    const DonatorObject = new Donator({
        specialNeedRef,
        name,
        phone1,
        phone2,
        address,
        email
    })

    DonatorObject.save().then(() => {
        res.json(DonatorObject);

    }).catch((err) => {
        console.log(err);
    })

})

module.exports = router;

