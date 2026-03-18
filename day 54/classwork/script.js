let box = document.getElementById("box");

box.style.width = "200px";
box.style.height = "200px";

let colorIndex = 0;

let colors = ["red", "blue", "green"];

setInterval(function(){

box.style.backgroundColor = colors[colorIndex];

colorIndex++;

if(colorIndex === colors.length){
colorIndex = 0;
}

},1000);