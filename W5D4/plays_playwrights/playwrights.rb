require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Playwrights
  attr_accessor :id, :name, :birth_year

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Play.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']    
  end

  def create
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year)
      INSERT INTO
        plays (name, birth_year)
      VALUES
        (?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year, self.id)
      UPDATE
        plays
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
  end

  self.find_by_title(title)
    PlayDBConnection.instance.execute(<<-SQL, title)
      SELECT * FROM plays
      WHERE title = ?
    SQL
  end

  # self.find_by_playwright(name)
  #   PlayDBConnection.instance.execute(<<-SQL, name)
  #     SELECT plays.* 
  #     FROM plays p JOIN
  #         playwrights pw ON p.playwright_id = pw.id
  #     WHERE pw.name = ?
  #   SQL
  # end

end

#p Play.all
#Play.find_by_title('All My Sons')

