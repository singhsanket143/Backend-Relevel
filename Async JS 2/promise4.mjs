function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Timer ended");
            resolve("sanket");
        }, 4000);
    });
}

fun()
.then((data) => {
    console.log("promise resolved", data);
})