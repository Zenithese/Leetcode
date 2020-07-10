// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

var longestPalindrome = function (s) {

    let longest = ""

    const palindrome = (start, end) => {

        while ((start - 1 >= 0 && end + 1 < s.length) && (s[start - 1] === s[end + 1])) {

            start--

            end++

        }

        return s.slice(start, end + 1)

    }

    for (let i = 0; i < s.length; i++) {

        let oddCurrent = palindrome(i, i)

        if (oddCurrent.length > longest.length) longest = oddCurrent

        if (s[i] == s[i + 1]) {

            let evenCurrent = palindrome(i, i + 1)

            if (evenCurrent.length > longest.length) longest = evenCurrent

        }

    }

    return longest

};