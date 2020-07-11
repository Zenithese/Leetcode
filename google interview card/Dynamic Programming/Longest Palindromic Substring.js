// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

var longestPalindrome = function (s) {

    let longest = ""

    let count = 0

    const palindrome = (start, end) => {

        while ((start - 1 >= 0 && end + 1 < s.length) && (s[start - 1] === s[end + 1])) {

            count++

            start--

            end++

        }

        return s.slice(start, end + 1)

    }

    for (let i = 0; i < s.length; i++) {

        count++

        let oddCurrent = palindrome(i, i)

        if (oddCurrent.length > longest.length) longest = oddCurrent

        if (s[i] == s[i + 1]) {

            let evenCurrent = palindrome(i, i + 1)

            if (evenCurrent.length > longest.length) longest = evenCurrent

        }

    }

    console.log(count)

    return longest

};

var manachersAlgorithm = (s) => {

    if (s.length <= 1) return s

    s = "|" + s.split("").join("|") + "|"
    let longest = [0, ""]
    let dp = new Array(s.length).fill(0)
    let center = 0
    let end = 0
    let count = 0



    for (let i = 0; i < s.length; i++) {

        count++

        let mirror = (center * 2) - i

        if (i < end) dp[i] = Math.min(end - i, dp[mirror])



        a = i + (1 + dp[i])

        b = i - (1 + dp[i])

        while ((b >= 0 && a + 1 < s.length) && (s[b] === s[a])) {

            dp[i]++



            a++

            b--

            count++

        }

    

        if (dp[i] >= longest[0]) longest = [dp[i], current = s.slice(i - dp[i], i + dp[i] + 1)]

        if (i + dp[i] > end) {

            center = i

            end = i + dp[i]

        }
        
    }

    console.log(count)

    return [longest[1].split("|").join(""), dp]

}

console.log("O(n^2):", longestPalindrome("abaxabaxabb"))
// console.log("O(n):", manachersAlgorithm("aaaaaaaaaaa"))
console.log("O(n):", manachersAlgorithm("abaxabaxabb"))
// console.log("O(n):", manachersAlgorithm("cbba"))
// console.log("O(n):", manachersAlgorithm("aaaa"))
// console.log("O(n):", manachersAlgorithm("aaaabaaa"))
// console.log("O(n):", manachersAlgorithm("ababababa"))


// s = "|" + s.split("").join("|") + "|"

// console.log(s)

// let longest = ""

// let dp = new Array(s.length).fill(0)

// const palindrome = (start, end) => {

//     while ((start - 1 >= 0 && end + 1 < s.length) && (s[start - 1] === s[end + 1])) {

//         start--

//         end++

//         dp[end] = dp[start]

//     }

//     let current = s.slice(start, end + 1)

//     longest = current.length > longest.length ? current : longest

//     return current.length

// }

// let center = 0
// let start = 0, end = 0

// for (let i = 0; i < s.length; i++) {

//     dp[i] = palindrome(start, end)

//     quotient = Math.floor(dp[i] / 4)

//     i += quotient <= 1 ? 0 : quotient % 2 === 1 && dp[i] % 2 === 0 ? quotient - 1 : quotient

//     // i += quotient % 2 === 0 ? quotient + 1 : quotient + 2

//     start = i - quotient

//     end = i + quotient

//     console.log(start, i, end)

// }

// return [longest.split("|").join(""), dp]

