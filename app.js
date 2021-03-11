const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

require("./db/conn");

const userDetail = require("./models/userDetail")
const ConsgDetail = require("./models/ConsgDetail")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

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

app.post("/book",async(req,res)=>
{
  try {

      var uid = new Date().getMillisecondnows();
      var cid = Math.floor(Math.random() * 100);
      const UserInput = new userDetail({
        User_Id : uid,
        Name : req.body.name,
        Address : req.body.address,
        Mobile_No : req.body.mobile,
        Email_Id : req.body.email
      })

      const consgInput = new ConsgDetail({
        Csg_No : cid,
        User_Id : uid,
        Weight : req.body.weight,
        Sender : req.body.sname,
        Receiver : req.body.rname,
        Source_Branch : req.body.plocation,
        Destination_Branch : req.body.dlocation
      })

      const input = await UserInput.save();
      const input1 = await consgInput.save();
      res.status(201).render("/");

  } catch (error) {
      res.status(400).send(error);
  }

});

app.get("/signin",(req,res)=>
{
  res.render("signin");
});
app.get("/new",(req,res)=>
{
  res.render("new");
});
app.get("/dashm",(req,res)=>
{
  res.render("dashm");
});

app.listen(3000,()=> {
  console.log("Server started on port 3000");
});

//Database part

// const Employee = new mongoose.Schema({
//   Employee_id : Number,
//   Post: String,
//   Name : String,
//   Address : String,
//   Password : String,
//   Mobile_No : Number,
//   Email_Id : String
// });


// const Truck = new mongoose.Schema({
//   Truck_No : String,
//   Current_Branch : String,
//   No_Of_Csg_Handled : Number,
//   Status : String,
//   Usage : String
// });

// const Bill = new mongoose.Schema({
//   CSG_No : Number,
//   Customer_ID : Number,
//   // source and reciever name
//   Source_Branch : String,
//   Destination_Branch : String,
//   Price : Number,
//   Truck_No : String,
// })
