
// first-class functions
`used as value or data`
let sum = (a,b) => a+b;
let sub = (a,b) => a-b;

let double = (f,a,b) => f(a,b) * 2;

console.log(double(sum,2,3));

// higher order functions
`
takes functions as arguments
returns functions as result
`

let greaterThan = function (n) {
    return value => value > n;
}

let greaterThanTwo = greaterThan(2);

let number = greaterThanTwo(4);

console.log(number);


// function composition
`combine 2 or more functions`
let filter2 = function(a,b) {
    if(a>b) return a;
    return b;
}

let filter1 = function(x,y) {
    if(x>y) return x;
    return y;
}

let compose = (fun1, fun2) => (x,y,z) => fun1(z,fun2(x,y));

let greatest = compose(filter1, filter2);

console.log(greatest(10,5,11));
