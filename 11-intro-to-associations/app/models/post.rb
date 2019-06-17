class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :commenters, through: :comments, source: :user
  # has_many :users, through: :comments

  # def user
  #   User.find(self.user_id)
  # end

  def top_3_comments
    comments.order(rating: :desc).limit(3)
  end

  def short_description
    "#{self.id}. #{self.title} by #{self.user.name}"
  end

  def detail_view
    "\n\n
    Title: #{title}
    Author: #{user.name}
    
    =======
    #{content}
    \n\n"
  end
end