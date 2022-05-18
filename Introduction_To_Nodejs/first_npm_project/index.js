#!/usr/bin/env node

// console.log("hello world");

// console.log(process.argv.splice(2));

var args = require('minimist')(process.argv.splice(2))

console.log(args.name) 

console.log("Sanket")