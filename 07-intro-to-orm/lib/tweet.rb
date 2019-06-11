class Tweet
  attr_reader :id
  attr_accessor :message, :username

  def self.all
    hashes = DB[:conn].execute("SELECT * FROM tweets")
    hashes.map { |options| Tweet.new(options) }
  end

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    self.save unless self.id
  end

  def save
    insert_sql = "INSERT INTO tweets (username, message) VALUES ('#{self.username}', '#{self.message}')"
    DB[:conn].execute(insert_sql)
  end
end
