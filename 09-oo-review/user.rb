class User
  @@users = []

  def initialize(first, last)
    @first_name = first
    @last_name = last
    @@users << self
  end

  def self.all
    @@users
  end

  # def self.find_by_name(name)
  #   self.all.each do |user|
  #     return user if user.full_name == name
  #   end
  # end

  def self.find_by_name(name)
    self.all.find { |x| x.full_name == name }
  end

  def self.all_names
    self.all.map { |u| u.full_name }
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def reviews
    Review.all.select { |rev| rev.user == self }
  end

  # def reviews
  #   my_reviews = []
  #   Review.all.each do |review|
  #     if review.user == self
  #       my_reviews << review
  #     end
  #   end
  #   my_reviews
  # end

  def add_review(album, content)
    Review.new(self, album, content)
  end

  def album_reviews(album)
    reviews.select { |r| r.album == album }
  end

  def reviewed_albums
    the_albums = []
    self.reviews.each do |review|
      the_albums << review.album
    end
    the_albums.uniq
  end

  def reviewed_albums
    self.reviews.map { |rev| rev.album }.uniq
  end 
end
