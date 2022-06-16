const axios = require('axios');

// POST request with axios
async function post(params) {

    let res = await axios.post("http://localhost:3000/users/", params)
                .then(data => console.log(`POST ${JSON.stringify(data)}`))
                .catch(err => console.log(`POST ${err}`));

}

async function get(index) {

    let res = await axios.get(`http://localhost:3000/users/${index}`);
                        // .then(data => console.log(`GET ${data.last_name}`))
                        // .catch(err => console.log(`POST ${err}`));
    let response = await res;

    console.log(`METHOD ${response.config.method}`);
    console.log(`DATA ${JSON.stringify(response.data)}`); 
    console.log(`STATUS ${response.status}`);    

}

async function deleteUser(index) {

    let deletedUser = await axios.delete(`http://localhost:3000/users/${index}/`);

    let res = await deletedUser.data;
    console.log(res);

}


let params = {
    first_name: 'someone',
    last_name: 'something',
    email: 'something@something.com'
};

// Call these functions

// post(params);
// get(7);
// deleteUser(6);