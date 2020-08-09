var firebaseConfig = {
    apiKey: "AIzaSyBRykX5yZEriXqKduFibF8xHyjZ0KVwSG4",
    authDomain: "jeilopez.firebaseapp.com",
    databaseURL: "https://jeilopez.firebaseio.com",
    projectId: "jeilopez",
    storageBucket: "jeilopez.appspot.com",
    messagingSenderId: "465624968599",
    appId: "1:465624968599:web:788e461716cdef34bca8d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var txtname =document.getElementById('primernombre');
var txtname =document.getElementById('primerapellido');

function agregarDatos(){
    db.collection("Aleta").add({
    nombre: "JeisonA",
    apellido: "LopezA",
    rol: "Administrador"
    }) 
    .then((docRef)=>{
        console.log("Document written with ID:", docRef.id);
        alert('Datos agregados correctamente', docRef.id) 
    })
    .catch((error)=> {
        console.error("Error adding document: ", error);
    });
    console.log(`El nombre es: ${nombre.value} y el apellido es: ${apellido.value}`);

}