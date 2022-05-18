function billing(data, chargeCC) {
    // some logic
    for(let i = 0; i < 1000000000; i++) {
        // some logic
    }
    // reads the user data and charges the credit card
    chargeCC(data);
    chargeCC(data);
}

function chargeCC(data) {
    // some logic it charges the card
    console.log("CC charged");
}

let data = {
    name: "Sanket",
    age: 24,
    acc_no: 1234321
}
billing(data, chargeCC);


setTimeout(function () {
    console.log("done");
}, 3000);