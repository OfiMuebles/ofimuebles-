

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


function saveproducts() {


    //var nameproduct = document.getElementById("nameproduct").value;
    //var priceproduct = document.getElementById("priceproduct").value;
    //var categoryproduct = document.getElementById("categoryproduct").value;
    //var photoproduct = document.getElementById("photoproduct").value;

    db.collection("products").add({
        name: nameproduct.value,
        price: priceproduct.value
    })
        .then((docRef) => {
            console.log("Document written with ID:", docRef.id);
            alert('Datos agregados correctamente', docRef.id)
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    
}
