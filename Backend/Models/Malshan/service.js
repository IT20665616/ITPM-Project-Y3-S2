const mongoose = require("mongoose");
const schema = mongoose.Schema;


const Reqserviceschema = new schema({
    fullName:{
        type: String,
        required : true
    },

    nic : {
        type : String,
        required : true
    },

    mobileNo :{
        type : Number,
        required :true
    },

    email:{
        type: String,
        required : true
    },

    address:{
        type :String,
        required :true
    },
    lane:{
        type :String,
        required :true
    },
    serviceType:{
        type :String,
        required :true
    },
    date:{
        type:Date,
        default: Date.now,
        required:true
    }
})



const serviceRoute= mongoose.model("service",Reqserviceschema);
module.exports=serviceRoute;
//create model