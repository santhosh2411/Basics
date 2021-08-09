/// to find the fibonanci series

let a = 0;
let b = 1;
let sum;
let arr = [0, 1];

for (let i = 2; i < 8; i++) {
    sum = a + b;
    a = b;
    b = sum;
    arr.push(b)
}

console.log(arr);