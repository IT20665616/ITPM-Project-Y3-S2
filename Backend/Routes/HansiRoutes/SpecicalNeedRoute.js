const router = require("express").Router();
let SpecialNeed = require('../../Models/Hansi/SpecialNeedModel');

//{ http://localhost:8070/SpecialNeed/add }
//we use post method to add data to the databaser

router.route("/add").post((req, res) => {

    //we use .body here becase we are taking data from the body of the url
    //if we have data types other than 'String' we have to convert it to the perticular data type

    const date = new Date();

    let day = date.getDate();
    let month = "0" + (date.getMonth() + 1);
    let year = date.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;

    const name = req.body.name;
    const phone1 = req.body.phone1;
    const phone2 = req.body.phone2;
    const address = req.body.address;
    const nic = req.body.nic;
    const createdDate = currentDate;
    const description = req.body.description;
    const status = 0;

    const newSpecialNeedObject = new SpecialNeed({
        name,
        phone1,
        phone2,
        address,
        nic,
        createdDate,
        description,
        status
    })

    newSpecialNeedObject.save().then(() => {
        // send a message to front end from the jason format
        // this executes only when the argument is true
        res.json(newSpecialNeedObject);

    }).catch((err) => {
        console.log(err);
    })

})

/*******************************************************************/
//RETRIEVE function

//we use get method to fetch data from the database

router.route("/").get((req, res) => {
    SpecialNeed.find().then((SpecicalNeedRoute) => {
        res.json(SpecicalNeedRoute);
    }).catch((err) => {
        console.log(err);
    })
})

/******************************************************************/
// UPDATE function

//we are taking the perticuler object id from the url
//don't forget to put : 
//we use put method to update details

router.route("/update/:id").put(async (req, res) => {

    let userID = req.params.id;

    const { name, phone1, phone2, address, nic, description } = req.body;

    const updateSpecialNeed = {
        name,
        phone1,
        phone2,
        address,
        nic,
        description
    }

    const update = await SpecialNeed.findByIdAndUpdate(userID, updateSpecialNeed)

        .then(() => {
            res.status(200).send({ status: "Special need Updated Successfully !" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Database couldn't update properly", SpecialNeed: update })
        })
})


/******************************************************************/
// UPDATE function

//we are taking the perticuler object id from the url
//don't forget to put : 
//we use put method to update details

router.route("/update/status/:id").put(async (req, res) => {

    let userID = req.params.id;

    const status = req.body.status;

    const updateSpecialNeed = {
        status
    }

    const update = await SpecialNeed.findByIdAndUpdate(userID, updateSpecialNeed)

        .then(() => {
            res.status(200).send({ status: "Special need Updated Successfully !" })
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

    await SpecialNeed.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "Special need deletion successful !" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in deletion" });
        })

})

/******************************************************************************************/
// RETRIEVE function (one at a time)

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    const special_need = await SpecialNeed.findById(userID)
        .then((SpecialNeed) => {
            res.status(200).send({ Status: "Special need fetched", SpecialNeed: SpecialNeed })
        }).catch((err) => {
            res.status(500).send({ Status: "Special need fetching unsuccessfull !" });
        })
})

/******************************************************************************************/
// Search function (one at a time)

router.route("/search/:createdDate").get(async (req, res) => {
    try {
        console.log(req.body)
        const special_need = await SpecialNeed.find({createdDate: req.params.createdDate});
        if (!special_need) {
          return res.status(400).json({ message: 'customer not found' });
        }
        res.json(special_need);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }

})


// do not forget to export the module after implementation
module.exports = router;

