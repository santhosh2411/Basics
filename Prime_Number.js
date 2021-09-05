// To find the given num is Prime or Not
for (let n = 1; n < 4; n++) {
    switch (n) {
        case 1:
        case 2:
        case 3:
            console.log(n, " It is a Prime number");
            break;
    }
}
for (let k = 4; k < 15; k++) {
    let ab = 0;
    for (let i = 2; i < k; i++) {
        if (k % i == 0) {
            ab = 1;
        }
    }

    if (ab == 1) {
        console.log(k, "It is not a Prime Number");
    } else {
        console.log(k, "It is a Prime Number");
    }
}