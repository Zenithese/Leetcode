// https://leetcode.com/problems/video-stitching/




var memoVideoStitching = function (clips, T, t = 0, memo = {}, stitch = []) {

    let key = `${clips}-${t}`
    if (key in memo) return memo[key]; if (t >= T) return 0;

    const stitchCounts = []
    console.log(t)
    clips.forEach((clip, index) => {
        let copy = clips.slice()
        if (!stitch.length && clip[0] === 0 || (stitch.length && clip[0] <= stitch[stitch.length - 1][1])) {
            copy.splice(index, 1)
            stitchCounts.push(videoStitching(copy, T, clip[1], memo, stitch.concat([clip])) + 1)
        }
    });

    memo[key] = Math.min(...stitchCounts)
    return memo[key] === Infinity && t === 0 ? -1 : memo[key]

};

var videoStitching = (clips, T, shots = []) => {

    for (let i = 0; i < clips.length; i++) {
        if (!shots[clips[i][0]] || clips[i][1] > shots[clips[i][0]][1]) shots[clips[i][0]] = clips[i]
    }

    let coverage = [shots[0]]; last = shots[0]
    for (let i = 1; i < shots.length; i++) {
        if (!shots[i]) {
            continue
        } else if (shots[i][0] <= coverage[coverage.length - 1][1] && last[1] < shots[i][1]) {
            last = shots[i]
        } else if (shots[i][0] > coverage[coverage.length - 1][1] && last) {
            coverage.push(last)
        }
    }

    return last !== coverage[coverage.length - 1] ? coverage.length + 1 : coverage.length

}
const clips = [[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]], T = 10
// const clips = [[0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 10], [6, 11], [7, 12], [8, 13], [9, 14], [10, 15], [11, 16], [12, 17], [13, 18], [14, 19], [15, 20], [16, 21], [17, 22], [18, 23], [19, 24], [20, 25], [21, 26], [22, 27], [23, 28], [24, 29], [25, 30], [26, 31], [27, 32], [28, 33], [29, 34], [30, 35], [31, 36], [32, 37], [33, 38], [34, 39], [35, 40], [36, 41], [37, 42], [38, 43], [39, 44], [40, 45], [41, 46], [42, 47], [43, 48], [44, 49], [45, 50], [46, 51], [47, 52], [48, 53], [49, 54]], T = 50
console.log(videoStitching(clips, T)) // => 50