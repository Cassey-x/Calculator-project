
const display = document.querySelector("input")
console.log(display)

const Append = (input) => {
    display.value += input == "+" || input == "-" || input == "*" || input == "/"? ` ${input} ` : input;
}

const Clear = () => {
    display.value = "";
}

const Calc = () => {
    try{
        display.value = eval(display.value);
    }
    catch(Error){
        display.value = "Error";
    }
}

const Delete = () => {
    if (display.value.endsWith(" ")){
        display.value = display.value.slice(0, display.value.length-3);
    }
    else{
        display.value = display.value.slice(0, display.value.length-1);
    }
}

let word = "string";
console.log(word.replace(word.slice(-2), ""));
console.log(word.endsWith("g"))