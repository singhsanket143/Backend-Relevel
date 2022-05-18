function wait_for_sometime() {
    console.log("Inside the function");
    for(let i = 0; i < 10000000000; i++) {
        // some piece of code
    }
    console.log("Now going to be outside the function");
}

console.log("Start");

setTimeout(function () {
    console.log("Set time out 1 is done");
}, 0);

setTimeout(function () {
    console.log("Set time out 2 is done");
}, 10);

wait_for_sometime();

setTimeout(function () {
    console.log("Set time out 3 is done");
}, 2000);

console.log("End");