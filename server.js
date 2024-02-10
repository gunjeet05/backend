//making a normal express file
const express=require("express");

const dotenv=require("dotenv").config();
const errorHandler=require("./middleWare/errorHandler")
//We can specify the port number  here also but in production we uses env file 
//npm i dotenv
const app=express();
const port=process.env.PORT || 5000;

const router=require("./routes/contactRoute")
// app.get("/api/contacts", (req, res)=>{
//     // res.send("contacts List"); 
//     //if we want to send data in json format
//     // res.json({message:"All contact List"}) //or   res.json({"message":"All contact List"});
    

//     //if we want to send status code also
//     res.status(200).json({"message":"All contact List"});

// })


// now we wil not write all the routes here rather we will call routes from other file
//use is middleware
app.use(express.json());
app.use("/api/contacts",router)
//whenever we want to use any middleware use "use"
app.use(errorHandler);



app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})



/*
we dont want to show all route in this file 
We want to make a seprate file for all routes
*/

/*

whenever we recieve the data from client we need to parse it for that we can use "use " which is a middleware*/