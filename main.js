const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;

}