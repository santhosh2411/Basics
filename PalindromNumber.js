// function Palindrome(n) {
//     var rem, temp, final = 0;
//     var number = Number(n);

//     temp = number;
//     console.log(temp)
//     while (number > 0) {
//         rem = number % 10;
//         console.log("Remainder-->", rem)
//         number = parseInt(number / 10);
//         console.log("Number--->", number)
//         final = final * 10 + rem;
//         console.log("Final-->", final)
//     }
//     if (final == temp) {
//         console.log("The inputed number is Palindrome");
//     } else {
//         console.log("The inputted number is not palindrome");
//     }
// }
// Palindrome(515)

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(" "); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    console.log(splitString);

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    console.log(reverseArray);

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    return joinArray;

    //Step 4. Return the reversed string
    // "olleh"
}

console.log(reverseString("hello World is my"));