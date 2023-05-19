const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const villageOfficersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  regCertificate: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  workingArea: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("officers", villageOfficersSchema);