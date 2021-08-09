function Palindrome(n) {
    var rem, temp, final = 0;
    var number = Number(n);

    temp = number;
    console.log(temp)
    while (number > 0) {
        rem = number % 10;
        console.log("Remainder-->", rem)
        number = parseInt(number / 10);
        console.log("Number--->", number)
        final = final * 10 + rem;
        console.log("Final-->", final)
    }
    if (final == temp) {
        console.log("The inputed number is Palindrome");
    } else {
        console.log("The inputted number is not palindrome");
    }
}
Palindrome(515)