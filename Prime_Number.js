// To find the given num is Prime or Not
let n = 779;
switch (n) {
    case 1:
    case 2:
    case 3:
        console.log(n, " It is a Prime number");
        break;
}
let ab = 0;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        ab = 1;
        break;
    }
}
if (ab == 1) {
    console.log(n, "It is not a Prime Number");
} else {
    console.log(n, "It is a Prime Number");
}