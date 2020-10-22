function minChange(coins, amount) {
    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0

    coins.forEach(coin => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * coin <= amt; qty++) {
                remainder = amt - qty * coin;
                let attempt = table[remainder] + qty
                if (attempt < table[amt]) table[amt] = attempt;
            }
        }
    });

    return table[table.length - 1];
}

console.log(minChange([1, 2, 5], 11))