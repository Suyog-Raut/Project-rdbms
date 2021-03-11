function openform(){
  var x= document.getElementById("1stform");
if (x.style.display==="none"){
  x.style.display="block";
}else {
  x.style.display="none";
}
}

function openform1(){
  var x= document.getElementById("2ndform");
if (x.style.display==="none"){
  x.style.display="block";
}else {
  x.style.display="none";
}
}

function openform2(){
  var x= document.getElementById("3rdform");
if (x.style.display==="none"){
  x.style.display="block";
}else {
  x.style.display="none";
}
}

function getPrice(){
  var weight = getElementById("weight1").value;
  var price= 1500 + weight*10;
  document.getElementById("display").innerHtml= price;
}

function openGet(){
  var p= 1500 + document.getElementById("weight1").value*10;
  var r = confirm("According to present situation and taking in account the pickup and delivery location, the consignment cost will be Rs. "+ p+" . Press OK to confirm this order. Thank You.");
  if(!r){
   return false;
  } else {
    this.form.submit();
  }
}
