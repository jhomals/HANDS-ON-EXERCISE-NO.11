const elementTxt = document.getElementById("elements");
let numInpt = document.getElementById("numInpt");
const sumTxt = document.getElementById("sum");
const highNum = document.getElementById("highNum");
const lowNum = document.getElementById("lowNum");
let sum = 0;
let largest = 0;
let lowest = 0;
let arr = [];

function insertEl() {
    arr.push(parseInt(numInpt.value));
    let smallest = arr[0];
    for (let i = 0; 1 < arr.length; i++) { 
        sum += arr[i];  
    }

    for(let i=0; i<arr.length; i++ ) {
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        if(arr[i] < largest){
            largest= arr[i];
    }
}

elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
highNum.innerHTML = largest;
lowNum.innerHTML = lowest;
console.log(arr);
}