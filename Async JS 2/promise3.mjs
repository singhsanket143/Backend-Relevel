import fetch from 'node-fetch';

function fetchingData() {
    return fetch('https://api.sampleapis.com/codingresources/codingResources');
}
const response = fetchingData();
response
.then(data => data.json())
.then(data => console.log(data));