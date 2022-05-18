import fetch from 'node-fetch';
function fetchingdata() {
    const response = fetch("https://api.sampleapis.com/codingresources/codingResources");
    return response;
}

console.log("Start");
const response = fetchingdata();
response.then((data) => {
    console.log("Data fetched successfully", data);
    return data.json();
})
.then((data) => {
    console.log(data);
    return 12;
})
.then((data) => {
    console.log(data);
})


response.then((data) => {
    console.log("data again", data);
})
console.log(response);
console.log("End");