class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  def initialize
    puts "\n\n>>>>> Building a new AppController: #{self} \n\n"
    super
  end

  get '/' do
    erb :homepage
  end

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  post '/books' do
    @book = Book.create(title: params[:title], author: params[:author])
    redirect "/books/#{@book.id}"
  end

end
