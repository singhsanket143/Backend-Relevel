const fun = delay => {
    console.log("hello after", delay, "seconds");
}

const id = setTimeout(fun, 4000, 4);
setTimeout(fun, 8000, 8);
clearTimeout(id);