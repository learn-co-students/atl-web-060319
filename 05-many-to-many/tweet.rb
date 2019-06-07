class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likers
    Like.all.select {|l| l.tweet == self }.map { |l| l.user }
  end
end
