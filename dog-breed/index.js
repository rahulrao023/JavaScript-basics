const axios = require('axios');

let regexp = /^ma|i$|ab/i;

async function getDogBreeds() {
    let dogImages = [];     // store dog images
    let count = 0;      // to check even dog breeds

    let allDogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all');

    let res = allDogBreeds.data;

    // console.log(JSON.stringify(res));   // all dog info

    let breeds = Object.entries(res.message);
    // console.log(breeds);    // all breeds

    let filteredDogBreeds = breeds.filter(breed => {
        return breed[0].match(regexp);
    });

    // console.log(filteredDogBreeds);     // array of all the breeds and sub-breeds matching the regexp condition

    for (let i=0; i < filteredDogBreeds.length; i++) {
        if(i%2 != 1) {
            continue;
        }
        if(filteredDogBreeds[i][1].length) {
            for (let j=0; j<filteredDogBreeds[i][1].length; j++) {
                let images = await axios.get(`https://dog.ceo/api/breed/${filteredDogBreeds[i][0]}/${filteredDogBreeds[i][1][j]}/images`).catch(err => console.log('err'));

                for(let image=0; image<images.data.message.length;image++) {
                    dogImages.push(images.data.message[image]);
                }
            }
        }
        else {
            let images = await axios.get(`https://dog.ceo/api/breed/${filteredDogBreeds[i][0]}/images`).catch(err => console.log('err'));
        }
        
    }

    console.log(dogImages);

}

getDogBreeds();
