let is_open = false;
let processOrder = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_open) {
            console.log("Starting the new work")
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(12);
        }
    })
}

processOrder(2000, () => {console.log("take order from customer")})
.then(() => {
    return processOrder(0, () => {console.log("order taken from customer")})
})
.then(() => {
    return processOrder(2000, () => {console.log("starting preparation of the bread")});
})
.then(() => {
    return processOrder(1000, () => {console.log("bread is ready")});
})
.then(() => {
    return processOrder(3000, () => {console.log("packed the bread for the customer")});
})
.then(() => {
    return processOrder(1000, () => {console.log("deliver the bread to the customer")});
})
.catch((err) => {
    console.log("something went wrong", err);
})
.finally(() => {
    console.log("Customer goes back");
})