# https://leetcode.com/problems/merge-intervals/

def merge(intervals)
    return intervals if intervals.length < 2
    
    intervals.sort_by! { |interval| interval[0] }
    result = []
    i = 0
    
    result = [intervals[0]] 
    for i in 1..intervals.length - 1
        if intervals[i][0] <= result[-1][1]
            result[-1][1] = [result[-1][1],intervals[i][1]].max
        else
            result << intervals[i]
        end
    end

    result
end

p merge([[1,4],[2,3]])