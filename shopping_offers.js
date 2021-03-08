var shoppingOffers = function (price, special, needs) {
    let result = 0
    for (let i = 0; i < price.length; i++) {
        result += needs[i] * price[i]
    };

    for (let i = 0; i < special.length; i++) {
        let possible = true;
        const need = [];
        for (let j = 0; j < price.length; j++) {
            if (needs[j] >= special[i][j]) {
                need.push(needs[j] - special[i][j]);
            } else {
                possible = false;
                break;
            }
        }
        if (possible) {
            const cost = special[i][special[i].length - 1] + shoppingOffers(price, special, need)
            result = Math.min(result, cost)
        }
    };

    return result;
};

console.log(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]))
console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]))