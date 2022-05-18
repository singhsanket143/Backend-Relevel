/*
Write three dummy functions
- Download
- Compress
- Upload
All these functions should use setTimeout to mimic the actual functionality
We have to somehow implement them so that we can
download a file, then compress it and then upload it.
*/

function download(url, cb) {
    console.log("Started downloading from", url);
    setTimeout(() => {
        let file = "image.png";
        console.log("Successfully downloaded the file", file);
        cb(null, file);
    }, 4000);
}

function compress(filepath, cb) {
    console.log("Started compressing", filepath);
    setTimeout(() => {
        console.log("Successfully compressed the files", filepath);
        cb(null, "www.upload.com", filepath);
    }, 2000);
}

function upload(url, file) {
    console.log("Started uplaoding the", file);
    setTimeout(() => {
        console.log("Successfully uplaoded", file);
    }, 3000);
}

download("www.abc.com", function (err, filepath) {
    if(err) {
        console.log(err);
        return;
    }
    compress(filepath, function (err1, url, file) {
        if(err1) {
            console.log(err1);
            return;
        }
        upload(url, file);
    });
});