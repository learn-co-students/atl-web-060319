class AddCatsOwnedToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :cats_owned, :integer, default: 10
  end
end
