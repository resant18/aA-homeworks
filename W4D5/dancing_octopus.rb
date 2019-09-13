#!/usr/bin/env ruby
require 'io/console'
require 'benchmark'
require 'set'

# O(n)
def slow_dance(direction, tiles_array)    
    tiles_array.index(direction)
end

# O(1)
def constant_dance(direction)
    h_direction = {
        "up" => 0,
        "right-up" => 1,
        "right"=> 2,
        "right-down" => 3,
        "down" => 4,
        "left-down" => 5,
        "left" => 6,
        "left-up" => 7
    }
    h_direction[direction]
end

def run_performance_tests(tiles_array)
    count = 100000
    Benchmark.benchmark(Benchmark::CAPTION, 9, Benchmark::FORMAT,
                        "Avg. Sluggish:  ", "Avg. Dominant: ", "Avg. Clever: ") do |b|
      slow_dance = b.report("Slow Dance:\t") { count.times { slow_dance("up", tiles_array) } }
      constant_dance = b.report("Constant Dance:\t") { count.times { constant_dance("up") } }      
      [slow_dance/count, constant_dance/count]
    end
end


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

print "Slow Dance:"
puts slow_dance("up", tiles_array)    
puts
print "Constant Dance:"
puts constant_dance("up")
puts

run_performance_tests(tiles_array)