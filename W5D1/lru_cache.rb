class LRUCache
    def initialize(size)
        @cache = []
        @size = size
    end

    def count
      # returns number of elements currently in cache
        @cache.count
    end

    def add(el)
      # adds element to cache according to LRU principle
        el_idx = find(el)
        if el_idx.nil? 
            if self.count < @size
                @cache << el
            else  
                @cache.shift
                @cache << el
            end
        else  
            @cache.delete(el)
            @cache << el  
        end        
    end

    def show
      # shows the items in the cache, with the LRU item first
      print @cache
      nil
    end

    private
    # helper methods go here!
    def find(el)
        @cache.find_index(el) # O(n)
    end    
end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})

johnny_cache.show