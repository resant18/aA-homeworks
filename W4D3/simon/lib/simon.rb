class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = Array.new
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn    
    show_sequence
    system("clear")
    require_sequence

    if !game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color  
    sleep(1)  
  end

  def require_sequence    
    puts "Do you remember the sequence? Repeat the sequence by typing all color sequence's first letter: "
    input = gets.chomp
    if input == @seq.join
      @game_over = true
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You did it! Let's play again"
  end

  def game_over_message
    puts "Game over!!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end