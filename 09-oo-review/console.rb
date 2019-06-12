require 'pry'

require_relative 'user'
require_relative 'album'
require_relative 'review'

brit = User.new("Brit", "Butler")
blake = User.new("Blake", "Stoner")

kalfinator = Album.new("Kalfinator")
white_album = Album.new("White Album")

brit.add_review(white_album, "Is pretty good. You should hear.")
brit.add_review(white_album, "changed my mind. this is garbage. gimme that kalfinator.")
brits_review = Review.new(brit, kalfinator, "So good it made me nauseous. The most fire album of 2019.")
blake.add_review(kalfinator, 'it changed my life!!!')

binding.pry