function validatePalin(string) {
    // get the total length of the words

    const len = string.length;
    let isPalindrom = true;

    // Use for loop to divide the words into 2 half

    for (let i = 0; i < len / 2; i++) {
        console.log(len / 2)
            // validate the first and last characters are same
        console.log(i, string[i], "-----", (len - 1 - i), string[len - 1 - i])
        if (string[i] !== string[len - 1 - i]) {
            isPalindrom = false;
        }
    }

    return isPalindrom;
}

const result = validatePalin("MALAYALAM");

if (result) {
    console.log("Yes")
} else {
    console.log("No")
}