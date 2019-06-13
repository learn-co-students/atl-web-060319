class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :author_id, null: false
      t.string :title
      t.string :genre
      t.datetime :published_at
      t.integer :page_count
      t.string :blurb
    end
  end
end
