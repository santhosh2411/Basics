// Factorial

for (let i = 1; i <= 100; i++) {
    let f = 1;
    for (let j = 1; j <= i; j++) {
        f = f * j;
    }
    console.log(i, "=", f);
}