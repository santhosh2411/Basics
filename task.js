/// the number in array need to be add even in seperate and odd in separate

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = [];
let c = [];
let sum = 0;
let sum1 = 0;
for (let i = 0; i < array1.length; i++) {

    if (array1[i] % 2 == 0) {
        b.push(array1[i]);
    } else {
        c.push(array1[i]);
    }
}
for (let j = 0; j < b.length; j++) {
    sum = sum + b[j];
}

for (let k = 0; k < c.length; k++) {
    sum1 = sum1 + c[k];
}
console.log(sum);
console.log(sum1);