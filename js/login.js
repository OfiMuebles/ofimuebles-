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

var emailUser = document.getElementById('emailUser');
var passUser = document.getElementById('passUser');

function limpiarDatosLogin() {
    emailUser.value = "";
    passUser.value = "";
}
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });
}

function registraUsuario() {
    firebase.auth().createUserWithEmailAndPassword(emailUser.value, passUser.value)
        .then(() => {
            verificar();
            console.log("El usuario se ha registrado");
            limpiarDatosLogin();
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
        }); 
}


function login() {
    var uno = emailUser.value;
    firebase.auth().signInWithEmailAndPassword(uno, passUser.value)
        .then((user) => {
            sessionStorage.setItem('login', user.email);
            window.location.href = '/views/index.html';
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            limpiarDatosLogin();
        });
}

function cerrarSesion() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            window.location.href = 'index.html';
        }).catch((error) => {
            console.log(error.message)
        });
}

function estado() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            emailUsuarioLogueado.innerHTML = user.email;
        }
        else {
            window.location.href = 'index.html';
        }
    });
}
