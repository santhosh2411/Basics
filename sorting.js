const array = [4, 2, 5, 52, 66, 7];

for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j < array.length) {
        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        j++;
    }
}

console.log(array);