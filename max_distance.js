var maxDistance = function (arrays) {

    let max = -Infinity

    arrays = arrays.map(array => [Math.min(...array), Math.max(...array)])

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays.length; j++) {
            if (i !== j) max = Math.max(max, arrays[j][1] - arrays[i][0])
        }
    }

    return max

};

var maxDistanceOptimized = function (arrays) {
    let result = 0;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    for (var i = 1; i < arrays.length; i++) {
        
        let first = arrays[i][0];
        let last = arrays[i][arrays[i].length - 1];

        result = Math.max(
            result,
            Math.max(
                Math.abs(last - min),
                Math.abs(max - first)
            )
        );

        min = Math.min(min, first);
        max = Math.max(max, last);
        
    }

    return result;
};

console.log(maxDistance([[1, 4], [0, 5]]))