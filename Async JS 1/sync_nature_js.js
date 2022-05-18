function wait_for_sometime() {
    console.log("Inside the function");
    for(let i = 0; i < 10000000000; i++) {
        // some piece of code
    }
    console.log("Now going to be outside the function");
}

console.log("Start");
wait_for_sometime();
console.log("End");