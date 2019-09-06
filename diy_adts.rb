# Exercise 1 - Stack
# Let's write a Stack class. To do this, use the following framework:

class Stack        
    def initialize
        # create ivar to store stack here!
        @items = []
    end

    def push(el)
        # adds an element to the stack
        @items << el
    end

    def pop
        # removes one element from the stack
        @items.pop
    end

    def peek
        # returns, but doesn't remove, the top element in the stack
        @items.last
    end
end

# Exercise 2 - Queue
class Queue
    def initialize
        @items = []
    end

    def enqueue(el)
        @items << el
    end

    def  dequeue 
        @items.shift        
    end
    
    def peek
        @items.first
    end
end

# Exercise 3 - Map
class Map
    def initialize
        @items = []
    end

    def key_index(key)
        @items.index { |pair| pair[0] == key } 
    end

    def set(key, value)
        pair_idx = key_index(key)
        if pair_idx
            @items[pair_idx][1] = value
        else            
            @items << [key, value]
        end
    end
    
    def get(key)
        @items.each { |pair| return pair[1] if pair[0] == key }
        nil
    end

    def delete(key)        
        @items.each_with_index do |pair, i| 
            if pair[0] == key 
                @items.delete_at(i) 
                return pair[1]
            end
        end
        nil
    end    

    def show
        @items
    end
end