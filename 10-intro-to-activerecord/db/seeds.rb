Author.destroy_all
Book.destroy_all

john = Author.create(first_name: "John", last_name: "Steinbeck")
eddie = Author.create(first_name: "Eddie", last_name: "Poester")
milosz = Author.create(first_name: "Czeslaw", last_name: "Milosz")

Book.create(author_id: milosz.id, title: "Unattainable Earth")
Book.create(author_id: john.id, title: "East of Eden")
