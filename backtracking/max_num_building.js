// https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/

const maximumRequests = (n, requests) => {
    const transfers = Array(n).fill(0)
    let approved = 0

    const search = (i, count) => {
        if (i === requests.length) {
            if (transfers.every(x => x == 0)) approved = Math.max(count, approved)
            return
        }

        transfers[requests[i][0]]--
        transfers[requests[i][1]]++
        search(i + 1, count + 1)
        transfers[requests[i][0]]++
        transfers[requests[i][1]]--
        search(i + 1, count)

    }

    search(0, 0)

    return approved
}

const n  = 5, requests  = [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]
const n2 = 3, requests2 = [[0, 0], [1, 2], [2, 1]]
const n3 = 4, requests3 = [[0, 3], [3, 1], [1, 2], [2, 0]]
const n4 = 3, requests4 = [[1, 2], [1, 2], [2, 2], [0, 2], [2, 1], [1, 1], [1, 2]]
console.log(maximumRequests(n,  requests )) // => 5
console.log(maximumRequests(n2, requests2)) // => 3
console.log(maximumRequests(n3, requests3)) // => 4
console.log(maximumRequests(n4, requests4)) // => 4