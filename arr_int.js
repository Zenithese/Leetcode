let A = [-1, -5, 1, 3, 6, 4, 1, 2] // => 6

function arrInt(A) {
    let num = 1
    A = A.sort((a, b) => a - b).filter(i => i > 0)
    for (let i = 0; i < A.length; i++) {
        if (A[i] === num) {
            num++
        }
    }
    return num
}

console.log(arrInt(A))

// function arrInt(A) {
//     A = A.sort()
//     if (A[A.length - 1] <= 0) return 1
//     let a = new Array(A[A.length - 1] + 1).fill(null)
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] > 0) {
//             a[A[i]] = A[i]
//         }
//     }
//     for (let i = 1; i < a.length; i++) {
//         if (!a[i]) return a[i - 1] + 1
//     }
//     return A[A.length - 1] + 1
// }