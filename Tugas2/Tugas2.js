function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}


const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);
