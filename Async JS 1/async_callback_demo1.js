/*
Write three dummy functions
- Download
- Compress
- Upload
All these functions should use setTimeout to mimic the actual functionality
We have to somehow implement them so that we can
download a file, then compress it and then upload it.
*/

function download(url) {
    // somehow it will download the file from the given url
    console.log("Started downloading the file from", url);
    setTimeout(() => {
        let file = "image.png";
        console.log("Successfully downloaded the file", file);
    }, 4000);
}

function compress(filePath) {
    // somehow it will compress the fi;e present in the filepath
    console.log("Started compressing the file", filePath);
    setTimeout(() => {
        console.log("Successfully compressed the file", filePath);
    }, 2000);
}

function upload(url, file) {
    // somehow it will upload the file to the given url
    console.log("Started upload of the file", file);
    setTimeout(() => {
        console.log("Successfully uploaded the file", file);
    }, 3000);
}

download("www.abc.com");
compress("image.png");
upload("www.upload.com", "image.png");

/*
Started downloading the file from www.abc.com
Started compressing the file image.png
Started upload of the file image.png
Successfully compressed the file image.png
Successfully uploaded the file image.png
Successfully downloaded the file image.png
*/

/*
    Is there any way in which we can control the order of the execution of these async functions ? 
*/