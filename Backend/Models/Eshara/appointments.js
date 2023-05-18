const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("appointments", appointmentSchema);