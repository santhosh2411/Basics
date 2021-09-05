// To find out the prime and non prime numbers in a series of numbers

if (true) {
    console.log("1 is a Prime Number");
}
if (true) {
    console.log("2 is a Prime Number");
}
for (let i = 3; i < 15; i++) {
    let ab = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            ab = 1;
        }
    }
    if (ab == 1) {
        console.log(i, "It is not a Prime Number");
    } else {
        console.log(i, "It is a Prime Number");
    }

}