// Divisble by 3 or 5 or Both or not divisible  by both
const a = 2;
if (a % 3 == 0 && a % 5 == 0) {
    console.log("Divisible by 3 and 5");
}
else if (a % 3 == 0) {
    console.log("Divisible by 3");
}
else if (a % 5 == 0) {
    console.log("Divisible by 5");
}
else {
    console.log("It is Neither Divisible by 3 nor 5");
}