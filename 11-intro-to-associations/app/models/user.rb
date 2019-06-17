class User < ActiveRecord::Base
  has_many :posts
  has_many :comments

  # def posts
  #   Post.where(user_id: self.id)
  # end
end