var first_numb;
var secound_numb;
var answer;


function calc(operator) {
    switch (operator) {
        case "+": 
            setAnswer(getFirstNumberValue() + getSecondNumberValue());
            break;
        case "-": 
        setAnswer(getFirstNumberValue() - getSecondNumberValue());
            break;
        case "*": 
        setAnswer(getFirstNumberValue() * getSecondNumberValue());
            break;
        case "/": 
        setAnswer(getFirstNumberValue() / getSecondNumberValue());
            break;
    }
}

function getFirstNumberValue() {
    return getValueFromId("first_numb");
}

function getSecondNumberValue() {
    return getValueFromId("secound_numb");
}

function getValueFromId(id) {
    return Number(document.getElementById(id).value);
}

function setAnswer(value) {
    document.getElementById("answer").innerHTML = value;
}