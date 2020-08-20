
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

function verificar() {
    var user = firebase.auth().currentUser;
  
    user.sendEmailVerification().then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });
  }


function agregarDatos(user){

    firebase.auth().createUserWithEmailAndPassword(emailUser.value, contrasena.value)
    .then(() => {
        verificar();
        console.log("El usuario se ha registrado");
    })
    .catch(function (error) {
        console.log("Error: ", error.message);
    }); 

    db.collection("Usuario").add({
        nombredeusuario:usuario.value,
        primernombre: primernombre.value,
        segundonombre: segundonombre.value,
        primerapellido: primerapellido.value,
        segundoapellido:segundoapellido.value,
        CorreoUsuario:emailUser.value,
        ContrasenaUsuario:contrasena.value
    })  
    .then((docRef)=>{
        console.log("Document written with ID:", docRef.id);
        alert('Datos agregados correctamente', docRef.id) 
    })
    .catch((error)=> {
        console.error("Error adding document: ", error);
    });
    console.log(`El nombre es:   ${primernombre.value} y el apellido es: ${primerapellido.value}`);

}