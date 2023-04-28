const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonatorSchema = new Schema({
    specialNeedRef : {
        type : String,
        required : true
    },
    dname : {
        type : String,
        required : true
    },

    dphone1 : {
        type : String,
        required : true
    },

    dphone2 : {
        type : String,
        required : true
    },

    daddress : {
        type : String,
        required : true
    },

    demail : {
        type : String,
        required : true
    },

})

const Donator = mongoose.model("Donator", DonatorSchema);
module.exports = Donator;