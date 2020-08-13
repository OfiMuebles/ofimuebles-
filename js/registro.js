
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

function agregarDatos(user){
    db.collection("Estudiante").add({
        nombredeusuario:usuario.value,
        contraseñadeusuario:contrasena.value,
        primernombre: primernombre.value,
        segundonombre: segundonombre.value,
        primerapellido: primerapellido.value,
        segundoapellido:segundoapellido.value,
        rol:"Usuario"
    }) 
    .then((docRef)=>{
        console.log("Document written with ID:", docRef.id);
        alert('Datos agregados correctamente', docRef.id) 
    })
    .catch((error)=> {
        console.error("Error adding document: ", error);
    });
    console.log(`El nombre es: ${primernombre.value} y el apellido es: ${primerapellido.value}`);

}