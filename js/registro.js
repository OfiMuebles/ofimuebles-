
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

function limpiardatos(){
    usuario.value="";
    primernombre.value="";
    segundonombre.value="";
    primerapellido.value="";
    segundoapellido.value="";
    emailUser.value="";
    contrasena.value="";

}


function agregarDatos(user){

    firebase.auth().createUserWithEmailAndPassword(emailUser.value, contrasena.value)

    .then(() => {
        verificar();
        console.log("El usuario se ha registrado");
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
            alert('Datos agregados correctamente... por favor inicia sesion', docRef.id) ;
            limpiardatos();
            firebase.auth().signOut();
            window.location.href = '/views/login.html';

        })
        .catch((error)=> {
            console.error("Error adding document: ", error);
        });

    })
    .catch(function (error) {
        console.log("Error: ", error.message);
        alert("Por favor revisar los datos digitados... Error:"+ error.message);
    }); 

    

}