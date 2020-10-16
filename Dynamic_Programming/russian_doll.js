// function maxEnvelopes(envelopes, memo = {}, doll = envelopes[0], count = 0) {
    
//     if (String(doll) in memo) return memo[String(doll)]

//     let attempts = [1]
//     envelopes.forEach(envelope => {

//         if (envelope[0] > doll[0] && envelope[1] > doll[1]) {
//             attempts.push(maxEnvelopes(envelopes, memo, envelope, count + 1) + 1)
//         }

//         if (count < envelopes.length) {
//             attempts.push(maxEnvelopes(envelopes, memo, envelope, count + 1))
//         }

//     })

//     return memo[String(doll)] = Math.max(...attempts)

// }

function maxEnvelopes(envelopes) {

    envelopes.sort((a, b) => a[0] - b[0])

    const LIS = new Array(envelopes.length).fill(1)

    for (let i = 0; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1)
            }
        }
    }

    return envelopes.length ? Math.max(...LIS) : 0
    
}

console.log(maxEnvelopes([[10, 8], [1, 12], [6, 15], [2, 18]]))