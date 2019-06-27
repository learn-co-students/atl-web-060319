class Author < ActiveRecord::Base
  has_many :authors

  validates :full_name, presence: true, uniqueness: true
end