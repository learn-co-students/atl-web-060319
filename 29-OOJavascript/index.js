document.addEventListener("DOMContentLoaded", setupCode)

// let setupCode = () => console.log('inside setup code')
let cardColumn = document.querySelector('.card-columns')

function setupCode() {
    console.log('inside setup code')
    // let formButton = ($('.form').get(0))
    let formButton = document.querySelector('.form')
    formButton.addEventListener('submit', handleSubmit)

    console.log(ash)
    ash.addPet(pikachu)


    let cardContainer = document.querySelector('.card-columns')
    cardContainer.innerHTML += ash.render()

}

function handleSubmit(event) {
    event.preventDefault()
    console.log('inside handle submit:')
    const [image, name, experience] = event.target
    console.log(image, name, experience)
    let newTrainerTemplate = new Trainer(name.value, image.value, experience.value)
    console.log(newTrainerTemplate)
    let cardContainer = document.querySelector('.card-columns')
    cardContainer.innerHTML += newTrainerTemplate.render()

}

// let handleSubmit = (event) => {
//     event.preventDefault()
//     const [image, name, age, height ] = event.target
//     let person = new Person(image.value, name.value, age.value, height.value)
//     person.cardHtml(document.querySelector('.card-columns'))
//     debugger

// }









