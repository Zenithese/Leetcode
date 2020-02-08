// romanNumerals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// }

const romanNumeral = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
}

const nums = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
]

var intToRoman = function (num) {
    let translation = "";

    for(let i = 0; i < nums.length; i++) {
        let n = nums[i]
        while (n <= num) {
            translation += romanNumeral[n];
            num -= n;
        }
        if (num <= 0) break
    }

    

    return translation;
};

console.log(intToRoman(191))
// console.log(9)