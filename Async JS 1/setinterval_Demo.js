let x = 0;
function fun() {
    x++;
    if(x == 5) {
        clearInterval(timerId);
    }
    console.log("having fun");
}

var timerId = setInterval(fun, 2000);
console.log("stop")