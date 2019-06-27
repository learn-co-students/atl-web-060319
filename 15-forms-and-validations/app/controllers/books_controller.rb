class BooksController < Sinatra::Base
  set :views, 'app/views/books'
  set :method_override, true

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    @authors = Author.all
    @book = Book.new
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  get '/books/:id/edit' do
    @authors = Author.all
    @book = Book.find(params[:id])
    erb :edit
  end

  patch '/books/:id' do
    params.delete(:_method)
    @book = Book.find(params[:id])
    @book.update(params)
    redirect "/books/#{@book.id}"
  end

  post '/books' do
    @authors = Author.all
    @book = Book.create(params)
    if @book.persisted?
      redirect "/books/#{@book.id}"
    else
      erb :new
    end
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.destroy
    redirect "/books"
  end

end
