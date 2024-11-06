var para = document.getElementById("para")
var textNumber = document.getElementById("textNumber")


function paraHendler(type){
    var counter = textNumber.innerHTML;
    if(type == "minus"){
        // textNumber.innerHTML = -- 1 
        // textNumber.innerHTML = ++ 1 

        textNumber.innerHTML = -- counter;
    }else{
        textNumber.innerHTML = ++ counter;
    }
    para.style.fontSize = `${counter}px`
}
function colorChange(input){
    console.log(input.value)
    // var color = document.getElementById("color")
    para.style.color = input.value;
}
function blodPara(){

    para.style.fontWeight = "bold"

}
function ItalicPara(){
    para.style.fontStyle = "italic"

}
var img = document.getElementById("img")
var imgNumber = document.getElementById("imgNumber")

function imageHandler(hndlImg){
    var control = imgNumber.innerHTML;
    if(hndlImg == "smallImg") {
        imgNumber.innerHTML = --control;
        img.style.width = `${control}20px`
 
    }else{
        imgNumber.innerHTML = ++control;
        img.style.width = `${control}20px`

    }
}