function filterArray(numbers, value) {
 let newNumbers = [];
   for (let number of numbers) {
     if (number > value) {newNumbers.push(number);}
    }
    return newNumbers;
};


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function getExtremeScores(scores) {
   const best = Math.max(...scores);
    const worst = Math.min(...scores);
    return { best, worst };  }


console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));





