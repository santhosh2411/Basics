function even() {
    return " even ";
}
function odd() {
    return "odd";
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i, even());
    }
    else {
        console.log(i, odd());
    }
}