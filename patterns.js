// Star patterns

let a = "*";
let b = "";
for (let i = 0; i < 6; i++) {
    for (let j = 1; j < 2; j++) {
        let c;
        c = a + b;
        b = c;
        console.log(b);
    }

}