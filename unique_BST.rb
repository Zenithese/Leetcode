class BST
   attr_accessor :value, :left, :right
    
    def initialize val
        @value = val
        @left = nil
        @right = nil
    end
end

def num_trees(n)
    
    trees = Array.new(n).each_with_index.map { |n, i| i + 1 }.permutation.to_a
    
    trees = trees.each_with_index.map { |tree| make_tree(tree) }
        
    trees = trees.select { |tree| n == count_nodes(tree) }

    trees.each { |tree| p tree }
    
end

def make_tree(tree)

    root = BST.new(tree.shift);
    tree.each{|e| contruct(root, e) }
    root

end

def contruct(node, value)
    if(value > node.value)
        node.right ? contruct(node.right, value) : node.right = BST.new(value)
    else
        node.left ? contruct(node.left, value) : node.left = BST.new(value)
    end
end

def count_nodes(tree)
    stack = [tree]
    count = 0

    while stack.length > 0
        count += 1
        node = stack.pop()
        
        stack.push(node.right) if node.right != nil
        stack.push(node.left) if node.left != nil
    end

    count
end

p num_trees(3)