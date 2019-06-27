class AuthorsController < Sinatra::Base
  set :views, 'app/views/authors'

  get '/authors' do
    @authors = Author.all
    erb :index
  end

  get '/authors/new' do
    erb :new
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