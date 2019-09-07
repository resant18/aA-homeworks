class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end
end

def bfs(starting_node, target_value)
    queue = []
    visited = Set.new

    queue.push(starting_node)
    visited.add(starting_node)
    until queue.empty?
        node = queue.shift
        print node.val + "\t"
        return node.val if node.val == target_value
        node.neighbors.each do |child|
            queue.push(child) unless visited.include?(child)
            visited.add(child)
        end
    end
    nil
end


# graph = {
#   'a': ['b', 'c', 'e'],
#   'b': [],
#   'c': ['b', 'd'],
#   'd': [],
#   'e': ['a'],
#   'f': ['e']
# }

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

puts "The bfs(a, 'b') result is:"
print bfs(a, "b")

puts "The bfs(a, 'f') result is:"
print bfs(a, "f")
