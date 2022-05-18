function fun(gn) {
    // here gn is a call back function
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    gn();
    gn();

}

fun(() => {
    console.log("the above function is done");
})