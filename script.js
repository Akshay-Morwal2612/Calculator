let display = document.getElementById("display");

function append(value){
    console.log("clicked",value)
    let last = display.value.slice(-1);
    if("+-*/".includes(last) && "+-*/".includes(value))
        return;
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error"
    }
}
