let firstItem = document.getElementById('one')
if(firstItem.hasAttribute('calss')){
    let classAttri_string = firstItem.getAttribute('calss')
    let resultsElement = document.getElementById('scripResults')
    resultsElement.innerHTML = '<p>這第一個item的class屬性值為:' + classAttri_string + </p>'
}