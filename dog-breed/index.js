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

    for await (let breed of filteredDogBreeds) {
        if(count%2 == 0) {
            if(breed[1].length) {
                for await (subBreed of breed[1]) {
                    let images = await axios.get(`https://dog.ceo/api/breed/${breed[0]}/${subBreed}/images`).catch(err => console.log('err'));
                    dogImages.push(images.data.message);
                }
            }
            else {
                let images = await axios.get(`https://dog.ceo/api/breed/${breed[0]}/images`).catch(err => console.log('err'));
                // console.log(images);
                dogImages.push(images.data.message);
            }
            count += 1;
        } else {
            count += 1;
            continue;
        }
        
    }

    console.log(dogImages);

}

getDogBreeds();
