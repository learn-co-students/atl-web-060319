require 'pry'

require_relative './tweet'
require_relative './user'
require_relative './like'

brit_butler = User.new("@brit_butler")
vanessa = User.new("@vanessab")
vanessa.post_tweet("man, this place sure is quiet")
vanessa.post_tweet("is anybody writing ruby code today?")

my_tweet = brit_butler.post_tweet("i am writing all the ruby i can. send band aids.")
vanessa.like_tweet(my_tweet)



binding.pry


