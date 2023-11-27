function reset(){
    location.reload()
}

var first =1
function clicked(event){
    if (first== 1){
    event.srcElement.innerText = "X"
    first = 2
}
else if (first== 2){
    
    event.srcElement.innerText = "O"
    first = 1
}
}

var a = document.getElementById("1st").innerHTML
var b = document.getElementById("2nd").innerHTML
var c = document.getElementById("3rd").innerHTML
var d = document.getElementById("4th").innerHTML
var e = document.getElementById("5th").innerHTML
var f = document.getElementById("6th").innerHTML
var g = document.getElementById("7th").innerHTML
var h = document.getElementById("8th").innerHTML
var i = document.getElementById("9th").innerHTML
