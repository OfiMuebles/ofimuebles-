


// Your web app's Firebase configuration

const firebaseConfig = {
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



function reset() {
    nameproduct.value = "";
    priceproduct.value = "";
    categoryproduct.value = "";

}

var idProducts = document.getElementById("id");




function saveproducts() {

    db.collection("products").add({
        name: nameproduct.value,
        price: priceproduct.value,
        category: categoryproduct.value,
    })
        .then((docRef) => {
            console.log("Document written with ID:", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            reset();

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}

function delet(id) {
    db.collection("products").doc(id).delete()
        .then(() => {
            //console.log("Documento eliminado" +  " "+id);

            Listproducts();
            // location.reload();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}

function act() {

    db.collection("products").doc(idProducts.value).update({
        name: nameproduct1.value,
        price: priceproduct1.value,
        category: categoryproduct1.value
    })
        .then(() => {
            console.log("Document successfully updated!");
            Listproducts();
        })
        .catch((error) => {
            console.log("Error: ", error);
        });;
}

function edit(id) {

    db.collection("products").doc(id).get()
        .then((doc) => {

            Listproducts();
            idProducts.value = id;
            nameproduct1.value = doc.data().name;
            priceproduct1.value = doc.data().price;
            categoryproduct1.value = doc.data().category;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

}


function Listproducts() {
    listproducts.innerHTML = "";
    //btnActualizar.classList.add('d-none');

    db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            listproducts.innerHTML += `
                <tr>
                        
                        <td>${doc.data().name}</td>
                        <td>${doc.data().price}</td>
                        <td>${doc.data().category}</td> 
                    <td>
                      <button type="button" class="btn btn-primary openBtn" data-toggle="modal" data-target="#edit" onclick="edit('${doc.id}')">
                        Editar
                      </button>

                     
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminar">
                        Eliminar
                      </button>
                      <!-- Modal -->
                      <div class="modal fade" id="eliminar" tabindex="-1" role="dialog" aria-labelledby="eliminarLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="editLabel">Eliminar</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              ¿desea eliminar este producto?
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                              <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="delet('${doc.id}')">confirmar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                </tr>           
                `;
        });
    })
        .catch(function (error) {
            console.log("Error: ", error);
        });


}

