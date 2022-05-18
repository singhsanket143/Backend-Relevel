function wait() {
    console.log("Entering wait");
    for(let i = 0; i < 10000000000; i++) {
        // some piece
    }
    console.log("Exitting wait");
}
setTimeout(function () {
    console.log("Task 1 completed")
}, 3000);
setTimeout(function () {
    console.log("Task 2 completed")
}, 0);
setTimeout(function () {
    console.log("Task 3 completed");
    setTimeout(function () {
        console.log("Task 6 completed");
    }, 1000);
}, 4000);
wait();
setTimeout(function () {
    console.log("Task 4 completed")
}, 2000);
setTimeout(function () {
    console.log("Task 5 completed")
}, 0);