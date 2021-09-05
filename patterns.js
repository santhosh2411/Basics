// Star patterns
/// Right triangle pattern in javascript

// let a = "*";
// let b = "";
// for (let i = 0; i < 6; i++) {
//     for (let j = 1; j < 2; j++) {
//         let c;
//         c = a + b;
//         b = c;
//         console.log(b);
//     }

// }

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);


///