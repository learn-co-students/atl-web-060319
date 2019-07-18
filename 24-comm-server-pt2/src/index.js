//**** Communication with Server****///

//PART 1
//fetch from url
	//render data from fetch
	//create renderAllBooks
	//create renderBook

//PART 2 
//add a book
	//send that data to api via fetch
	//call renderbook

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage(){

    let form = document.querySelector("#book-form")
    form.addEventListener("submit", handleSubmit)

    getAllBooks()
} 

function handleSubmit(e){

    e.preventDefault()

    let book = {title: e.target.title.value,
        author: e.target.author.value,
        img: e.target.cover.value
    }

    addNewBook(book)
}

function handleDeleteBtn(e){
    //delete my card 
    e.target.parentElement.remove()

    deleteBook(e.target.parentElement.dataset.id)
}

function createBookCard(book){
    const bookList = document.getElementById("book-list")

    let div = document.createElement("div")
    div.className = "card"
    div.dataset.id = book.id

    let img = document.createElement("img")
    img.src = book.img

    let title = document.createElement("p")
    title.innerText = book.title

    let author = document.createElement("p")
    author.innerText = book.author

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener("click", handleDeleteBtn)

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(deleteBtn)

    //Appending to DOM
    bookList.appendChild(div)
}

function createBookList(books){
    books.forEach(createBookCard)
    //books.forEach((book) => createBookCard(book))

    // books.forEach(function(book){createBookCard(book)})
}

function addNewBook(book){


    fetch('http://localhost:3000/books',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(book)
    })
    .catch(res => console.log("Error:", res))
    .then(res => res.json())
    .then(function(data){
        createBookCard(data)})

}


function deleteBook(id){

    console.log('id', id)
    fetch(`http://localhost:3000/books/${id}`,{
        method: 'DELETE'
    })
    .then(res => console.log(res))


}

function getAllBooks(){

    fetch('http://localhost:3000/books')
   .then(response => response.json() )
   .then(data => createBookList(data))
}






