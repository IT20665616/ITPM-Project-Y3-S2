const express = require('express');
const router = express.Router();
const registerPerson = require('../../Models/Sahan/registerPerson'); 

//add crud operation routers
// backend url=== http://localhost:8070/registerPerson/addPerson
router.route('/addPerson').post((req, res) => {
	//create variables for schema
	const name = req.body.name;
	const phone = req.body.phone;
	const address = req.body.address;
	const address2 = req.body.address2;
	const village = req.body.village;
	const position = req.body.position;
	const nic = req.body.nic;
	const workExperience = req.body.workExperience;
	const policeReport = req.body.policeReport;

	const newregisterPerson = new registerPerson({
		//initialized properties
		name,
		phone,
		address,
		address2,
		village,
		position,
		nic,
		workExperience,
		policeReport
	});
	
	newregisterPerson
		.save()
		.then(() => {
			res.json(newregisterPerson);
			//res.json('person details added'); (commented out because it is unreachable)
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({ error: err });
		});
});

//fetch all data from all users
//send response as a json format
// backend url=== http://localhost:8070/student/display
router.route('/').get((_req, res) => {
	registerPerson
		.find()
		.then((registerPersons) => {
			res.json(registerPersons);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({ error: 'error fetching all users' });
		});
});

//update part
//in user update we use put method.also we can use post method
//async==wait for promise from the function/await=wait to help async
router.route('/update/:id').put(async (req, res) => {
	let userId = req.params.id; //user id is a similer to primary key
	const {
		name,
		phone,
		address,
		address2,
		village,
		position,
		nic,
		workExperience,
		policeReport
	} = req.body; //destructure method
	const updateregisterPerson = {
		name,
		phone,
		address,
		address2,
		village,
		position,
		nic,
		workExperience,
		policeReport
	};
	//check if user is available
	const update = await registerPerson
		.findByIdAndUpdate(userId, updateregisterPerson)
		.then(() => {
			res.status(200).send({ status: 'person details updated' });
		})
		.catch((err) => {

			console.log('err.message');
			res.status(500).send({
				status: 'error with delete user',
				error: err.message
			});
		});
});

//how to take data from one user
router.route('/get/:id').get(async (req, res) => {
	let userId = req.params.id;
	await registerPerson
		.findById(userId) //*
		.then((registerPerson) => {
			res.status(200).send({
				Status: 'user fetched',
				registerPerson: registerPerson
			});
		})
		.catch((err) => {
			console.log(err.message);
			res.status(500).send({ status: err.message });
		});
});

// DELETE Function
//we use delete method to delete data from the database

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await registerPerson.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "Deletion successful !" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in deletion" });
        })

})

module.exports = router;


