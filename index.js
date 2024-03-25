const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    console.log(display.value)
}

function clearDisplay(){
    display.value ="";
    console.log(display.value)
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
    console.log(display.value)
}

function backspace(){

}

