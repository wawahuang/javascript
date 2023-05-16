let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')
let packageHintElement = document.getElementById('packageHint')
let termsElement = document.getElementById('terms')
let termsHintElement = document.getElementById('termsHint')

formElement.addEventListener('submit',(event)=>{
    console.log('submitting')
    event.preventDefault()
})

packageElement.addEventListener('change',(event)=>{
    console.log('changing')    
})