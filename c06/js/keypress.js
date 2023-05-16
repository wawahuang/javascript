let messageElement = document.getElementById('message');
let lastkeyElement = document.getElementById('lastkey');
let charDisplay = document.getElementById('charDisplay');
messageElement.addEventListener('keyup',(event)=>{
    lastkeyElement.textContent = `最後一個key:${event.key},keycode:${event.code}`;
    let textEnter = messageElement.value
    let counter = 180-textEntered.length
    charDisplay.textContent = `還剩下:${counter}個字`
});