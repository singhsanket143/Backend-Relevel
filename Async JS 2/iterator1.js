const arr = [1,2,3,4,"sanket", true];

const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator);

const str = "Hello";

const strIterator = str[Symbol.iterator]();

console.log(strIterator)

// for(let element of arrIterator) {
//     console.log(element);
// }

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());