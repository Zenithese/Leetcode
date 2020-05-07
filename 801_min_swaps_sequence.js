var minSwap = function (A, B) {
    let stay1 = 0, swap1 = 1;

    for (let i = 1; i < A.length; i++) {
        let stay2 = Infinity, swap2 = Infinity;
        if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
            stay2 = stay1
            swap2 = swap1 + 1
        }
        if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
            stay2 = Math.min(stay2, swap1)
            swap2 = Math.min(swap2, stay1 + 1)
        }

        stay1 = stay2, swap1 = swap2
    }

    return Math.min(stay1, swap1);
};