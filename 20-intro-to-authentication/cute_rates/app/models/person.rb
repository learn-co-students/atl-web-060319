class Person < ApplicationRecord
  has_many :pets

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
