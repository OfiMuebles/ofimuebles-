


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

function getdiningrooms() {
  getdiningroom.innerHTML = "";
  db.collection("products").where("category", "==", "COMEDORES")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        getdiningroom.innerHTML += `
        <br></br> 
        <div class="col-md-3" >
        <div class="card">
            <img src="../img/comedor.png" alt="card-1" class="card-img-top">
            <div class="card-body" >
                <h5>${doc.data().name}</h5>
                <h6>$ ${doc.data().price}</h6>
                <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To
                    Cart</button>
            </div>
        </div>
    </div>
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

}

function getrooms() {

  getroom.innerHTML = "";
  db.collection("products").where("category", "==", "SALAS")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        getroom.innerHTML += `
        <br></br> 
        <div class="col-md-3" >
        <div class="card">
            <img src="../img/sala.png" alt="card-1" class="card-img-top">
            <div class="card-body" >
                <h5>${doc.data().name}</h5>
                <h6>$ ${doc.data().price}</h6>
                <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To
                    Cart</button>
            </div>
        </div>
    </div>
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

}

function getdecoration() {
  decoration.innerHTML = "";
  db.collection("products").where("category", "==", "DECORACION")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        decoration.innerHTML += `
        <br></br> 
        <img src="../img/decoración.png" class="img-fluid mr-3 w-50" alt="media1">
        <div class="media-body mt-2">
            <h5>${doc.data().name}</h5>
            <h6>$ ${doc.data().price}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add
                To Cart</button>
        </div>
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

function getoffice() {
  office.innerHTML = "";
  db.collection("products").where("category", "==", "OFICINA")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        office.innerHTML += `
        <br></br> 
        <img src="../img/oficina.png" class="img-fluid mr-3 w-50" alt="media1">
        <div class="media-body mt-2">
            <h5>${doc.data().name}</h5>
            <h6>$ ${doc.data().price}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add
                To Cart</button>
        </div>
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

function getchair() {
  chair.innerHTML = "";
  db.collection("products").where("category", "==", "SILLAS")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        chair.innerHTML += `
        <br></br>  
        <img src="../img/silla.png" class="img-fluid mr-3 w-50" alt="media1">
        <div class="media-body mt-2">
            <h5>${doc.data().name}</h5>
            <h6>$ ${doc.data().price}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add
                To Cart</button>
        </div>
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

function getbedroom() {
  bedroom.innerHTML = "";
  db.collection("products").where("category", "==", "ALCOBAS")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        bedroom.innerHTML += `
        <br></br> 
              <div class="media mt-5" >
                <div class="col-md-3" >
                  <div class="card">
                    <img src="../img/alcoba.png" alt="card-1" class="card-img-top">
                      <div class="card-body" >
                        <h5>${doc.data().name}</h5>
                        <h6>$ ${doc.data().price}</h6>
                        <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To
                          Cart</button>
                  </div>
                </div>
              </div>
        
    
          
          `;

        ///console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

}

function get() {
  getdiningrooms()
  getrooms()
  getbedroom()
  getoffice()
  getdecoration()
  getchair()
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

function cerrarSesion() {
  console.log("Aleta")
  firebase.auth().signOut()
    .then(() => {
      console.log("Sesion cerrada exitosamente");
      window.location.href = 'index.html';
    }).catch((error) => {
      console.log(error.message)
    });
}

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
      window.location.href = '../views/admin.html';
    })
    .catch(function (error) {
      console.log("Error: ", error.message);
      limpiarDatosLogin();
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
