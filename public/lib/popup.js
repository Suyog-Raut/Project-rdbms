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

function getPrice(weight){

  return(1500 + weight*10)

}