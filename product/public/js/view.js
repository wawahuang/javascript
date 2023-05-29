import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection,getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyCV3DCUmqNQzHc386RLJ8iNZGeL-xVvOBQ",
    authDomain: "javascript1-9673b.firebaseapp.com",
    projectId: "javascript1-9673b",
    storageBucket: "javascript1-9673b.appspot.com",
    messagingSenderId: "827882049966",
    appId: "1:827882049966:web:5231ada125a5adbc52383f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));

let contents = ""
querySnapshot.forEach(doc => {
    console.log(doc.id)    
    let documentData = doc.data()
    console.log(documentData['productName'])
    contents += `<tr><th scope="row">${doc.id}</th><td>${documentData['productName']}</td><td>${documentData['code']}</td></tr>`
});

let tbodyElement = document.querySelector('#tbody')
tbodyElement.innerHTML = contents


