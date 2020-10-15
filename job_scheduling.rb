# https://leetcode.com/problems/maximum-profit-in-job-scheduling/submissions/

# Runtime: 176 ms, faster than 86.96% of Ruby online submissions for Maximum Profit in Job Scheduling.
# Memory Usage: 228.6 MB, less than 8.70% of Ruby online submissions for Maximum Profit in Job Scheduling.

def job_scheduling(start_time, end_time, profit)

    schedule = []

    (0...profit.length).each do |idx|
        schedule << {:start_time => start_time[idx], :end_time => end_time[idx], :profit => profit[idx]}
    end

    schedule.sort_by! { |shift| shift[:end_time] }
    
    # memo_helper(schedule)
    dp_helper(schedule)
    
end

def memo_helper(schedule, last_punch = 1, memo = {}, clock_in = 0)

    return memo[last_punch] if memo[last_punch]

    shifts = []
    (clock_in...schedule.length).each do |shift|
        shifts << (schedule[shift][:profit] + memo_helper(schedule, schedule[shift][:end_time], memo, shift + 1)) if schedule[shift][:start_time] >= last_punch
    end
    
    memo[last_punch] = shifts.max
    memo[last_punch] || 0
    
end

def dp_helper(schedule)

    dp = Array.new(schedule.length).fill(0)

    (0...schedule.length).each do |shift|
        
        profit = schedule[shift][:profit]

        previous_shift = shift - 1
        while previous_shift >= 0
            schedule[previous_shift][:end_time] <= schedule[shift][:start_time] ? break : previous_shift -= 1
        end
        
        profit += dp[previous_shift]
        dp[shift] = [profit, dp[shift - 1]].max

    end

    dp[-1]

end

p job_scheduling([1,2,3,4,6], 
                 [3,5,10,6,9], 
                 [20,20,100,70,60])