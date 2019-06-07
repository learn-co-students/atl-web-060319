class Like
  attr_reader :user, :tweet

  @@likes = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    self.class.all << self
  end

  def self.all
    @@likes
  end
end