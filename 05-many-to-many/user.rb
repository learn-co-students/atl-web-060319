class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def like_tweet(tweet)
    Like.new(self, tweet)
  end

  def tweets
    Tweet.all.select do |t|
      t.user == self
    end
  end

  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    tweets = []
    self.likes.each do |like|
      tweets << like.tweet
    end
    tweets
  end
end
