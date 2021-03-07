const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

var signincontent="You have succesfully signed up .";
var failcontent="Oops! It seems that something went wrong. Please try again";

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
app.get("/join",(req,res)=>
{
  res.render("join");
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
app.get("/signup",(req,res)=>
{
  res.render("signup");
});
app.get("/dash",(req,res)=>
{
  res.render("dash");
});
app.get("/success",(req,res)=>
{
  res.render("success", { content: signincontent });
});
app.get("/fail",(req,res)=>
{
  res.render("fail", { content: failcontent });
});
app.listen(3000,()=> {
  console.log("Server started on port 3000");
});
