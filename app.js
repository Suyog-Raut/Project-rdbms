const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>
{
  res.render("index");
});
app.get("/register",(req,res)=>
{
  res.render("register");
});

app.get("/find",(req,res)=>
{
  res.render("find");
});
app.get("/check",(req,res)=>
{
  res.render("check");
});
app.get("/book",(req,res)=>
{
  res.render("book");
});
app.get("/signin",(req,res)=>
{
  res.render("signin");
});

app.get("/dash",(req,res)=>
{
  res.render("dash");
});

app.listen(3000,()=> {
  console.log("Server started on port 3000");
});

//Database part

const Employee = new mongoose.Schema({
  Employee_id : Number,
  Post: String,
  Name : String,
  Address : String,
  Password : String,
  Mobile_No : Number,
  Email_Id : String
});

const Consignment = new mongoose.Schema({
  Csg_No : Number,
  Volume : Number,
  Sender : String,
  Receiver : String,
  Source_Branch : String,
  Destination_Branch : String,
  Is_Truck_Assigned : String
});

const Customer = new mongoose.Schema({
  Name : String,
  Address : String,
  Customer_Id : String,
  Mobile_No : Number,
  Email_Id : String
});

const Truck = new mongoose.Schema({
  Truck_No : String,
  Current_Branch : String,
  No_Of_Csg_Handled : Number,
  Status : String,
  Usage : String
});

const Price = new mongoose.Schema({
  Capacity : String,
  Price_Per_Km : String,
  No_Of_Csg_Handled : Number,
  Status : String,
  Usage : String
});

const Bill = new mongoose.Schema({
  CSG_No : Number,
  Customer_ID : Number,
  Source_Branch : String,
  Destination_Branch : String,
  Price : Number,
  Truck_No : String,
})
