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

    if (!envelopes.length) return 0

    for (let i = 0; i < envelopes.length; i++) {
        for (let j = i + 1; j < envelopes.length; j++) {
            if (i < j && envelopes[i][0] > envelopes[j][0]) {
                let temp = envelopes[i]
                envelopes[i] = envelopes[j]
                envelopes[j] = temp
            }
        }
    }

    let LIS = new Array(envelopes.length).fill(1).map((_, i)=>[envelopes[i]])

    for (let i = 0; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
                LIS[i] = LIS[i].length < LIS[j].length + 1 ? [...LIS[j], envelopes[i]] : LIS[i]
            }
        }
    }

    LIS = LIS.map(lis => lis.length)

    return Math.max(...LIS)
    
}

console.log(maxEnvelopes([[10, 8], [1, 12], [6, 15], [2, 18]]))