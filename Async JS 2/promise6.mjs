import fetch from 'node-fetch';
function fetchingData() {
    return fetch("https://api.sampleapis.com/codingresources/codingResources")
}

const response = fetchingData();

response.then(() => {
    console.log("Successfully received the response");
})
.then(() => {
    console.log("another then");
})
.catch((err) => {
    console.log("Something went wrong");
    // console.log(err);
    return err
})
.finally(() => {
    console.log("ended finally");
}) 


