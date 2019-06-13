class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |table|
      table.string :first_name, null: false
      table.string :last_name, null: false
      table.string :hometown
      table.text :influences
    end
  end
end
