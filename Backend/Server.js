
const express = require("express");

const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require("cors");

const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

//assign available port if our default port-8070 is not available
const PORT = process.env.PORT || 8070;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(cookieParser());

app.use(bodyParser.json());
app.use(cors());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    //useCreateIndex: "true",
    useNewUrlParser: "true",
    //useUnifiedTopology: "true",
    //useFindAndModify: "false"
});


//create a connection
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongodb Connection Success!");

});

app.listen (PORT, () => {
    console.log(`Server is up and running on th port: ${PORT}`)
})


//.... comment your route and add it here 
const  registerPersonroute=require("./Routes/SahanRoutes/registerPersons");
app.use("/registerPerson",registerPersonroute);


//SpecialNeeds router
const specialNeedRouter=require("./Routes/HansiRoutes/SpecicalNeedRoute");
app.use("/SpecialNeed",specialNeedRouter);

//malshan routes
//middlewares
// const RequestServiceRouter=require("../Backend/Routes/MalshanRoutes/Reqservices");

// app.use("/service",RequestServiceRouter);
const serviceRouter = require("./Routes/MalshanRoutes/Reqservices");
app.use("/service",serviceRouter);

//Donator router
const DonatorRouter=require("./Routes/HansiRoutes/DonatorRoute");
app.use("/donator",DonatorRouter);

//appointments
const AppRouter=require("./Routes/EsharaRoutes/appointments_route");
app.use("/appointment",AppRouter);

//officers
const OffierRouter=require("./Routes/EsharaRoutes/officers_route");
app.use("/officer",OffierRouter);

