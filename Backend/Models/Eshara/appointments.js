const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  NIC: {
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
    type:Date,
    required:true
  },
  time:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("appointments", appointmentSchema);