function squareroot(number) {
    let lo = 0, hi = number;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (mid * mid > number) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return hi;
}