const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();


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
