const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecialNeedSchema = new Schema({
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

    nic : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

})

const SpecialNeed = mongoose.model("SpecialNeed", SpecialNeedSchema);
module.exports = SpecialNeed;