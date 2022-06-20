var date = new Date();
console.log(date);

// add time
let newDate = new Date(24 * 3600 * 1000);
console.log(newDate);

// ------------ Accessing Date -------------
// string to time
let strDate = new Date("2022-06-05");
console.log(strDate);

// date with params
let date2 = new Date(2022,5,5,12,30,10);
console.log(date2);

let hours = new Date().getHours();
let mins = new Date().getMinutes();

let hours2 = new Date().getUTCHours();
let min2 = new Date().getUTCMinutes();

console.log(hours,mins);
console.log(hours2,min2);

let day = new Date().getDay();
console.log(day);

// -------------- Setting Date ---------------
var date = new Date();
date.setHours(12,10);
console.log(date);

var date = new Date(2022,4,36);
console.log(date);

// check run time of a loop
let start = Date.now();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = Date.now();
console.log(start,end,end-start);

// --------------- Date Parsing -----------------
var date = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(date);

var toDate = new Date(date);
console.log(toDate);