const array = [4, 2, 5, 52, 66, 7];

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    }
}

console.log(array);