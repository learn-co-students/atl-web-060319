

const bookList = document.getElementById("book-list")


function createBookCard(book){
	let div = document.createElement("div")
	div.className = "card"
	
	let img = document.createElement("img")
	img.src = book.img

	let title = document.createElement("p")
	title.innerText = book.title

	let author = document.createElement("p")
	author.innerText = book.author

	div.appendChild(img)
	div.appendChild(title)
	div.appendChild(author)

	//Appending to DOM
	bookList.appendChild(div)
}

for (let i = 0; i<books.length; i++){

	createBookCard(books[i])

}




