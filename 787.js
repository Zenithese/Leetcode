
var findCheapestPrice = function (n, flights, src, dst, K) {
    const graph = buildGraph(flights)

    const queue = []
    queue.push([src, 0])

    let minCost = Infinity

    for (let stops = K; stops >= -1; stops--) {
        let queueLength = queue.length
        for (let i = 0; i < queueLength; i++) {
            let [stop, cost] = queue.shift()

            if (cost > minCost) {
                continue
            }

            if (stop === dst) {
                minCost = Math.min(minCost, cost)
                continue
            }

            let transfers = graph[stop] || []
            for (let [transfer, marginalCost] of transfers) {
                queue.push([transfer, cost + marginalCost])
            }
        }
    }

    console.log(graph)
    return minCost === Infinity ? -1 : minCost
};

function buildGraph(edges) {
    const graph = {}
    for (let [src, dst, w] of edges) {
        graph[src] = graph[src] || []
        graph[src].push([dst, w])
    }
    return graph
}

n = 3
flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
src = 0
dst = 2
K = 0

console.log(findCheapestPrice(n, flights, src, dst, K))