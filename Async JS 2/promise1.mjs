import fetch from 'node-fetch';
function fetchingdata() {
    const response = fetch("https://api.sampleapis.com/codingresources/codingResources");
    return response;
}

console.log("Start");
const response = fetchingdata();
response.then(() => {
    console.log("Data fetched successfully");
    for(let i = 0; i < 10000000000;i++) {
        // some code
    }
})
response.then(() => {
    console.log("final bye");
})
console.log(response);
console.log("End");
for(let i = 0; i < 10000000000;i++) {
    // some code
}