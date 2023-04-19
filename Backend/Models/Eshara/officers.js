const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const villageOfficersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationCertificate: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
  workingArea: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("officers", villageOfficersSchema);