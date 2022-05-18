var isTrue = function(value, cb) {
    if(value == true) {
        cb(null, "Value was true");
    } else {
        cb(new Error("Value is not true"));
    }
}

var callback = function(err, returnValue) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(returnValue);
}

isTrue(false, callback);