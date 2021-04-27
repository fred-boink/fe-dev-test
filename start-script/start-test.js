const videos = require('./videos.json')
const axios = require('axios')
let endpointUrl = process.argv.slice(2);

let postPromise = videos.map((video) => {
    return axios.post(`https://crudcrud.com/api/${endpointUrl}/video`, video);
});

Promise.all(postPromise)
    .then(() => {
        console.log(`Complete and API at: https://crudcrud.com/api/${endpointUrl}/video`)
    })
    .catch((e) => {
        console.log(e)
    });