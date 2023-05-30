let selectedElement = document.querySelector("#stockSelect")

fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => {
            let name = element.name
            let code = element.code
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            optionElement.value = code
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)

        });
    })

//let optionElement = document.createElement("option")
//optionElement.value = "abc"
//optionElement.innerText="abc"
//selectedElement.appendChild(optionElement)

let formElement = document.querySelector('form')
formElement.addEventListener('sumit',(event)=>{
    event.preventDefault()
})