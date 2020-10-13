# https://leetcode.com/problems/kill-process/solution/

# Runtime: 208 ms, faster than 100.00% of Ruby online submissions for Kill Process.
# Memory Usage: 229.6 MB, less than 100.00% of Ruby online submissions for Kill Process.

class TreeNode
    attr_accessor :value, :children

    def initialize val
        @value = val
        @children = []
    end
end

def kill_process(pid, ppid, kill)
    hash = {}
    
    ppid.each { |process| hash[process] = TreeNode.new(process) if !hash[process] }
    
    pid.each { |process| hash[process] = TreeNode.new(process) if !hash[process] }

    ppid.each_with_index { |process, index| hash[process].children.push(hash[pid[index]]) }

    remove(kill, hash)
end

def remove(kill, hash, result = [])
    result.push(kill)
    hash[kill].children.each { |child| remove(child.value, hash, result) }
    result
end

p kill_process([1,3,10,5], [3,0,5,3], 5)