require 'rest-client'
require 'json'
require 'pry'

def greet
  puts "Welcome to BookSearchr!\n\n"
end

def get_search_term
  puts "What sort of books are you looking for?"
  gets.chomp
end

def get_books(query)
  url = "https://www.googleapis.com/books/v1/volumes?q=" + query
  response = RestClient.get(url)
  data = JSON.parse(response)['items']
end

def print_book(book)
  author_names = book['authors'].join(" and ")
  if book['description'].nil?
    description = "No Description Available"
  elsif book['description'].length > 140
    description = book['description'][0..140]
  else
    description = book['description']
  end
  puts "Title: #{book['title']}"
  puts "Authors: #{author_names}"
  puts "Description: #{description}"
  puts "\n\n"
end

def display_books(search_results)
  puts "\n\n*** SEARCH RESULTS ***\n"
  search_results.each do |book_info|
    book = book_info['volumeInfo']
    print_book(book)
  end
end

greet
your_search = get_search_term
results = get_books(your_search)
display_books(results)
