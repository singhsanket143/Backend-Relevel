async function fun() {
    return "fun";
}

function gun() {
    return Promise.resolve("gun");
}

console.log(fun());

console.log(gun())