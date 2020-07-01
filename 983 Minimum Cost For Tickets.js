var mincostTickets = function (days, costs) {

    const lastDay = days[days.length - 1]
    const daysSet = new Set(days)

    const dp = new Array(lastDay + 1).fill(0);

    for (let i = 1; i <= lastDay; i++) {

        if (daysSet.has(i)) {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            )
        } else {
            dp[i] = dp[i - 1]
        }

    };

    return dp[lastDay]

};

var mincostTickets = function (days, costs) {

    days.unshift(0)

    const dp = new Array(days.length).fill(0);

    for (let i = 1; i < days.length; i++) {
        
        const one = dp[i - 1] + costs[0];

        let j = 1;
        while (i - j !== 0 && days[i] - days[i - j] < 7) {
            j++
        }

        const seven = dp[i - j] + costs[1];

        while (i - j !== 0 && days[i] - days[i - j] < 30) {
            j++
        }

        const thirty = dp[i - j] + costs[2];

        dp[i] = Math.min(
            one,
            seven,
            thirty
        )
        
    }

    return dp.pop()

};