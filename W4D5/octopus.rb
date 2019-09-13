#!/usr/bin/env ruby
require 'io/console'
require 'benchmark'

# O(n^2)
def sluggish_octopus(arr_fish)    
    
    longest_fish = ""
    for i in 0...arr_fish.length
        for j in i+1...arr_fish.length
            if arr_fish[i].length > arr_fish[j].length
                longest_fish = arr_fish[i]
            else
                longest_fish = arr_fish[j]
            end
        end
    end

    longest_fish
end

# O(n log n)
def dominant_octopus(arr_fish)
    sorted_fish = merge_sort(arr_fish)
    sorted_fish.last
end

def merge_sort(array)
    return array if array.length <= 1

    mid_idx = array.length / 2
    merge(
      merge_sort(array.take(mid_idx)),
      merge_sort(array.drop(mid_idx))
    )
end

def merge(left, right)
    merged_array = []
    prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
    until left.empty? || right.empty?
        case prc.call(left.first.length, right.first.length)
            when -1
                merged_array << left.shift
            when 0
                merged_array << left.shift
            when 1
                merged_array << right.shift
        end
    end

    merged_array + left + right
end

#O(n)
def clever_octopus(arr_fish)
    longest_fish = ""
    (0...arr_fish.length-1).each do |i|
        if arr_fish[i].length > arr_fish[i+1].length
            longest_fish = arr_fish[i]
        else 
            longest_fish = arr_fish[i+1]
        end            
    end

    longest_fish
end

def run_performance_tests(arr_fish)
    arrays_to_test = []
    50.times { arrays_to_test += arr_fish }
    count = arrays_to_test.count

    Benchmark.benchmark(Benchmark::CAPTION, 9, Benchmark::FORMAT,
                        "Avg. Sluggish:  ", "Avg. Dominant: ", "Avg. Clever: ") do |b|
      sluggish = b.report("Sluggish:\t") { sluggish_octopus(arrays_to_test) }
      dominant = b.report("Dominant:\t") { dominant_octopus(arrays_to_test) }
      clever = b.report("Clever:\t\t") { clever_octopus(arrays_to_test) }
      [sluggish/count, dominant/count, clever/count]
    end
end


arr_fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

print "Slugish Octopus:"
puts sluggish_octopus(arr_fish)    
puts
print "Dominant Octopus:"
puts dominant_octopus(arr_fish.dup)
puts
print "Clever Octopus:"
puts clever_octopus(arr_fish)

run_performance_tests(arr_fish)