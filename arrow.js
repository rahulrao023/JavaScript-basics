const axios = require('axios');

// map
arr = [1,2,3,4,5,3,6,4];

let multiples = arr.map((val) => val * 2 );
console.log(`Multiples ${multiples}`);

let nonDuplicates = arr.filter((value, _, array) => {
    if(array.indexOf(value) == array.lastIndexOf(value)) return value;
});
console.log(`Non Duplicate elements ${nonDuplicates}`);


// promises
console.log('begin1');

let promise = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("from promise")},1000);
});

let res = promise
            .then((val) => {
                console.log(val);
            })
            .catch((err) => {
                console.log(err);
            });

console.log('end1');


// async await (GET request with axios)
async function getData() {
    console.log('start2');

    let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
                    .then(res => {
                        console.log(res.data);
                        console.log(res.status);
                    })
                    .catch(err => console.log(err));

    console.log('end2');
}

getData();
