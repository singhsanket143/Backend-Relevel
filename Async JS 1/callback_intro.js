function demo(arr, fn) {
    // the function fn is the call back, this fn will be passed by user but executed
    // by the demo function

    for(let i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}


let arr = [10, 20, 33, 12, 15, 11, 9];

// arr.forEach((element, idx) => {
//     console.log(element, idx);
// });

demo(arr, (element, index) => {
    console.log("element is", element, index);
})