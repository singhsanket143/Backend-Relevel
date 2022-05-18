function fun(n, cb) {
    for(let i = 0 ; i < n; i++) {
        // some task
    }
    let data = n;
    let err = null;
    cb(err, data);
}

fun(100, function (err, data) {
    if(err) {
        console.warn(err);
        return;
    }
    console.log(data);
})