function squared(n, count = 0, memo = {}) {

    let x = n

    while (x > 0) {
        let y = n
        while (y > 0) {
            count++
            y--
        }
        x--
    }

    return count

}

function recursiveSquared(n, p = 2, count = 0) {

    if (p === 1) {
        let c = 0
        for (let i = 0; i < n; i++) {
            c++
        }
        return c
    } else {
        for (let i = 0; i < n; i++) {
            count += recursiveSquared(n, p - 1, count)
        }
    }

    return count

}

function memoSquared(n, p = 2, count = 0, memo = {}) {

    if (p === 1) {
        let c = 0
        for (let i = 0; i < n; i++) {
            c++
        }
        return c
    } else {
        for (let i = 0; i < n; i++) {
            let key = `${p}`
            if (key in memo) {
                count += memo[key]
                continue
            }
            memo[key] = memoSquared(n, p - 1, count, memo)
            count += memo[key]
        }
    }

    return count

}
// recursiveSquared(5)
// console.log(squared(40000))
// recursiveSquared(113888)
// console.log(recursiveSquared(40000))
console.log(memoSquared(40000))