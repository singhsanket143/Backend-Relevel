const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("p1 done");
        res("p1");
    }, 3000);
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("p2 done");
        rej("10");
    }, 2000);
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("p3 done");
        res("p3");
    }, 6000);
})

const p4 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("p4 done");
        res("p4");
    }, 500);
})

// const p5 = Promise.resolve(10);

Promise.allSettled([p1, p2, p3, p4]).then((data) => {
    console.log("return array is", data);
})
.catch(() => {
    console.log("something went wrong");
})