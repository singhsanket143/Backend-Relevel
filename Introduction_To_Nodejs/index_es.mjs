import greet, {add, sub, mul} from './math_module_es.mjs';

console.log(add(10, 12));
console.log(sub(10, 12));
console.log(mul(10, 12));
console.log(greet());

// console.log(__dirname); // __dirname is deprecated in es6 modules -> throws errors