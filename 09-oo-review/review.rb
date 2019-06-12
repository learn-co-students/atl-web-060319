class Review
  attr_reader :user, :album
  attr_accessor :content

  @@reviews = []

  def initialize(user, album, content)
    @user = user
    @album = album
    @content = content
    self.class.all << self # same as @@reviews << self
  end

  def self.all
    @@reviews
  end
end