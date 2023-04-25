const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonatorSchema = new Schema({
    specialNeedRef : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },

    phone1 : {
        type : String,
        required : true
    },

    phone2 : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

})

const Donator = mongoose.model("Donator", DonatorSchema);
module.exports = Donator;