class SwitchBooksToHaveAnAuthor < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :integer
    Book.all.each do |book|
    author = Author.find_or_create_by(full_name: book.author)
      book.author_id = author.id
      book.save
    end
  end
end
