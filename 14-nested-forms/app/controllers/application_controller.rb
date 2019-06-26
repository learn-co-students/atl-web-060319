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
    erb :"books/index"
  end

  get '/books/new' do
    erb :"books/new"
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :"books/show"
  end

  post '/books' do
    @book = Book.create(params)
    redirect "/books/#{@book.id}"
  end

  get '/authors' do
    @authors = Author.all
    erb :"authors/index"
  end

  get '/authors/new' do
    erb :"authors/new"
  end

  post '/authors' do
    @author = Author.create(full_name: params[:full_name])
    params[:books].each do |book_info|
      Book.create(
        author_id: @author.id,
        title: book_info[:title],
        snippet: book_info[:snippet]
      )
    end
    redirect "/authors"
  end

end
