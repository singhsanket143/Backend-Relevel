/*
    process is a global, it has information about the environment the program 
    is running inside
*/
console.log(process);

/*
    require is a global that is a function to find and use module in the current module
    JS adopted module pattern in nodejs and require is considered the backbone of it 
*/
console.log(require); 

/*
    It has information about the current module, methods for making modules 
    consumable
*/
console.log(module);

/*
    Returns the current working directory
*/
console.log(__dirname);