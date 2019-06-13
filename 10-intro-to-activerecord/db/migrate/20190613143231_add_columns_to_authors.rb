class AddColumnsToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :age, :integer
    add_column :authors, :deceased, :boolean, default: false
  end
end
