//add an event listener to my delete button 
//on delete or click
    //delete book 

//add event listener to form
//add calback 
    //get values from inputs
    //add  a new book based on values

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage(){

    let deleteBtn = document.querySelector("#deleteBtn")
    deleteBtn.addEventListener("click", handleDeleteBtn)

    let form = document.querySelector("#book-form")
    form.addEventListener("submit", handleSubmit)
} 

function handleSubmit(e){

    e.preventDefault()

    let book = {title: e.target.title.value,
        author: e.target.author.value,
        img: e.target.cover.value
    }
    createBookCard(book)
    // console.log("title", e.target.title.value)
    // console.log("author", e.target.author.value)
    // console.log("cover", e.target.cover.value)

}

function handleDeleteBtn(e){
    //delete my card 
    e.target.parentElement.remove()
}

function createBookCard(book){
    const bookList = document.getElementById("book-list")

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

