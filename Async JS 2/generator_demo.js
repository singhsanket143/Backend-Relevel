function* fun() {
    console.log("Step 1");
    yield 100;
    return 20;
    console.log("Step 2");
    yield "Hello world";
}

const generator = fun();
console.log(
    generator.next()
)
console.log(
    generator.next()
)