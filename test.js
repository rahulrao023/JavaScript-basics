let sum = 0;
let sum2 = 0;

let week = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
};

function testWithFilter(ar) {
    let res = ar.filter((value) => {
        if(week[value]) return true;
        else {
            sum += value;
            return false;
        }
    }).map((value) => week[value]);

    return res;
}

function testWithFor(ar) {
    let res = [];
    ar.forEach((value) => {
         if(week[value]) res.push(week[value]);
         else sum2 += value;
    });
    return res;
}

let arr = [1,2,3,'1',8,9,6];

let result = testWithFilter(arr);
console.log(result);
console.log(sum);

let result2 = testWithFor(arr);
console.log(result2);
console.log(sum2);
