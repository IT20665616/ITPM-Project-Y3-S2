const router = require('express').Router();
const res = require('express/lib/response');
const { findByIdAndUpdate } = require('../../Models/Sahan/registerPerson');
let registerPerson = require('../../Models/Sahan/registerPerson'); //import registerPerson.js model

//add crud operation routers
// backend url=== http://localhost:8070/registerPerson/addPerson
router.route('/addPerson').post((req, res) => {
	//create variables for  schema
	const name = req.body.name;
	const phone = req.body.phone; //**************** *
	const address = req.body.address;
	const address2 = req.body.address2;
	const village = req.body.village; //req.body.gender==frontend eken ewana data request ekak widiht send wenne ithin e data ywne requwest eke body eka athule ynne
	const position = req.body.position;
	const idfront = req.body.idfront;
	const idback = req.body.idback;
	const policeReport = req.body.policeReport; //create object using register person model

	const newregisterPerson = new registerPerson({
		//initialized properties
		name,
		phone,
		address,
		address2,
		village,
		position,
		idfront,
		idback,
		policeReport
	});
	//pass the data to database using our previous created newregisterPerson object
	//js promise
	//pass data to database
	newregisterPerson
		.save()
		.then(() => {
			res.json(newregisterPerson);
			res.json('person details added');
			//res.jason=sent respond in jason method
		})
		.catch((err) => {
			console.log(err);
			console.log('error of adding person details');
		});
});
//fetch all data from all users
//send response as a json format //1st method to send response
// backend url=== http://localhost:8070/student/display
router.route('/').get((_req, res) => {
	registerPerson
		.find()
		.then((registerPersons) => {
			//*
			res.json(registerPersons);
		})
		.catch((err) => {
			console.log(err);
		});
});
//2.24
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
		idfront,
		idback,
		policeReport
	} = req.body; //destructure method
	const updateregisterPerson = {
		name,
		phone,
		address,
		address2,
		village,
		position,
		idfront,
		idback,
		policeReport
	};
	//check if user is available
	//const update =await findByIdUpdate(userId,updatePayment)
	const update = await registerPerson
		.findByIdAndUpdate(userId, updateregisterPerson)
		.then(() => {
			//2nd type to send response
			res.status(200).send({
				status: 'cash on delivery details  updated'
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				status: 'error with updating data',
				error: err.message
			});
		});
});
//delete
router.route('/delete/:id').delete(async (req, res) => {
	let userId = req.params.id;

	await registerPerson
		.findByIdAndDelete(userId) //*
		.then(() => {
			res.status(200).send({
				status: 'cash on delivery details deleted'
			});
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
				status: 'user fetched',
				registerPerson: registerPerson
			});
		})
		.catch(() => {
			console.log(err.message);
			res.status(500).send({ status: 'error with get user' });
		});
});

module.exports = router;
