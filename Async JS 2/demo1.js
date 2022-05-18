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
    let err = true
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

async function consume() {
    try {
        const file = await download("www.abc.com");
        console.log("file downloaded is", file);
        const filePath = await compress(file);
        console.log("compresion done", filePath);
        const status = await upload("www.xyz.com", filePath);
        console.log("upload status", status)
    } catch (err) {
        console.log("something went wrong")
    }
   
}


consume();