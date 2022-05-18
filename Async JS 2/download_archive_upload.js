const download = (url) => {
    console.log("Starting download from", url);
    let err = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err) {
                let file = "image.png";
                console.log("download completed");
                resolve(file);
            } else {
                console.log("Cannot download");
                reject(new Error("something went wrong"));
            }
        }, 3000);
    });
}

const compress = (filepath) => {
    console.log("Starting compression of", filepath);
    let err = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err) {
                let file = "image.zip";
                console.log("Compression completed");
                resolve(file);
            } else {
                console.log("Cannot compress");
                reject(new Error("something went wrong"));
            }
        }, 2000);
    })
}

const upload = (url, file) => {
    console.log("Starting upload");
    let err = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err) {
                console.log("upload successfull");
                resolve({success: true})
            } else {
                console.log("Cannot upload");
                reject(new Error("something went wrong"));
            }
        }, 4000);
    })
}

download("www.abc.com")
.then((data) => {
    // if the download function gets resolved successfully in the data param we will have filename
    return data;
})
.then((data) => {
    console.log("Details of the file downloaded", data);
    return compress(data);
})
.then((data) => {
    console.log("details of the file compressed", data);
    return upload("www.xyz.com", data);
})
.then((data) => {
    console.log("Upload status", data);
})
.catch((err) => {
    console.log("Cannot complete");
    // console.log(err);
})
.finally(() => {
    console.log("Goodbye");
})