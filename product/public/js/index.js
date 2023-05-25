let formElement = document.querySelector('#form')
let inputNameElement = document.querySelector('#inputName')

const validateName = () =>{
    let productName = inputNameElement.value
    console.log(productName)
}

formElement.addEventListener('submit',(event)=>{
    event.preventDefault()
    validateName()
})