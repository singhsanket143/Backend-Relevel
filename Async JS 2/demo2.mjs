import fetch from 'node-fetch';

const download = async () => {
    console.log("fetching started");
    return await fetch("https://api.sampleapis.com/codingresources/codingResources")
}

download()
.then((data) => {
    console.log(data);
})