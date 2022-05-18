function display(arr) {
    let n = 0;
    return {
        next() {
            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
const arr = [1,3,4,5,6,7,9];

const iterator = display(arr);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())