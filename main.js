const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt1 = document.getElementById("sum");
const resultTxt2 = document.getElementById("difference");
const resultTxt3 = document.getElementById("product");
const resultTxt4 = document.getElementById("quotient");

let sum = 0;
let difference = 0;
let product = 0;
let quotient = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt1.innerHTML = sum;
        difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt2.innerHTML = difference;
        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultTxt3.innerHTML = product;
        quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultTxt4.innerHTML = quotient;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt1.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    resultTxt4.innerHTML = "";
    sum = 0;
    difference = 0;
    product = 0;
    quotient = 0;
}