const mongoose = require('mongoose');
//const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

//create schema
//person name
const registerPersonSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	address2: {
		type: String,
		required: true
	},

	village: {
		type: String,
		required: true
	},
	position: {
		type: String,
		required: true
	},
	nic: {
		type: String,
		required: true
	},
	workExperience: {
		type: String,
		required: true
	},
	policeReport: {
		type: String,
		required: true
	}
	
	
	

});

//when table addd to mongo db it should be plural and all are simple letters
const registerPerson = mongoose.model(' registerPerson', registerPersonSchema);
module.exports = registerPerson;
//we have to export student model.because if not we cant use routes without student model
