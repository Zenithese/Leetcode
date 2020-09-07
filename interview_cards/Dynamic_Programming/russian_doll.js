function maxEnvelopes(envelopes, memo = {}, doll = envelopes[0], count = 0) {
    
    if (String(doll) in memo) return memo[String(doll)]

    let attempts = [1]
    envelopes.forEach(envelope => {

        if (envelope[0] > doll[0] && envelope[1] > doll[1]) {
            attempts.push(maxEnvelopes(envelopes, memo, envelope, count + 1) + 1)
        }

        if (count < envelopes.length) {
            attempts.push(maxEnvelopes(envelopes, memo, envelope, count + 1))
        }

    })

    return memo[String(doll)] = Math.max(...attempts)

}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))