const greeting = delay => {
    setTimeout(() => {
        console.log('hello world', delay);
        greeting(delay+1);

    }, delay*1000);
}

greeting(1);