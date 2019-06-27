class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  def initialize
    puts "\n\n>>>>> Building a new AppController: #{self} \n\n"
    super
  end

  get '/' do
    erb :homepage
  end

end
