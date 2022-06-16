const axios = require('axios');

// POST request with axios
async function post(params) {

    let res = await axios.post("http://localhost:3000/users/", params)
                .then(data => console.log(`POST ${data}`))
                .catch(err => console.log(`POST ${err}`));
}

async function get(index) {
    let res = await axios.get(`http://localhost:3000/users/${index}`);
                        // .then(data => console.log(`GET ${data.last_name}`))
                        // .catch(err => console.log(`POST ${err}`));
    let response = await res.data;
    console.log(response);
                        
}


let params = {
    first_name: 'rahul',
    last_name: 'rao',
    email: 'something@something.com'
};

// post(params);
get(7);