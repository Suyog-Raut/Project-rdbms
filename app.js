const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

require("./models/conn");

const userDetail = require("./models/userDetail")
const ConsgDetail = require("./models/ConsgDetail")

const employeeController = require('./controllers/employeeController');
const truckController = require('./controllers/truckController');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));

app.set('view engine', 'ejs');

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));

app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>
{
  res.render("index.ejs");
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
      var d = new Date.now();
      var UserInput = new userDetail({
        User_Id : d,
        Name : req.body.name,
        Address : req.body.address,
        Mobile_No : req.body.mobile,
        Email_Id : req.body.email 
      })

      var consgInput = new ConsgDetail({
         Csg_No : d,
         User_Id : d,
        Weight : req.body.weight,
        Sender : req.body.sname,
        Receiver : req.body.rname,
        Source_Branch : req.body.plocation,
        Destination_Branch : req.body.dlocation
        // truckid : 
      })

      

      const input = await UserInput.save();
      const input1 = await consgInput.save();
      res.status(201).render("index");

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
app.get("/dash",(req,res)=>
{
  res.render("dash");
});

app.listen(3000,()=> {
  console.log("Server started on port 3000");
});

app.use('/employee', employeeController);
app.use('/truck', truckController);

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


// const Bill = new mongoose.Schema({
//   CSG_No : Number,
//   Customer_ID : Number,
//   // source and reciever name
//   Source_Branch : String,
//   Destination_Branch : String,
//   Price : Number,
//   Truck_No : String,
// })


    // var truckid;

    // var MongoClient = require('mongodb').MongoClient;

    // var url = "mongodb://localhost:27017/";
    
    //   MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("RdbmsProject");
    //   dbo.collection("trucks").find({}, { projection: { assignd: false } }).toArray(function(err, res) {
    //     if (err) throw err;
    //     truckid = res[0]._id;
    //     console.log(res);
    //     db.close();
    //   });
    // });
