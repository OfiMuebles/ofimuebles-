const admin = require("firebase-admin");

const serviceAccount = require("./parceialwebjeison-firebase-adminsdk-ee5jn-26671b78c5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parceialwebjeison.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyCwV72UWanZpqiLkFRzR_VIEhSlSkkg1lM",
  authDomain: "parceialwebjeison.firebaseapp.com",
  databaseURL: "https://parceialwebjeison.firebaseio.com",
  projectId: "parceialwebjeison",
  storageBucket: "parceialwebjeison.appspot.com",
  messagingSenderId: "683650636548",
  appId: "1:683650636548:web:9a67d2f9084097cdca0e51"

}
firebase.initializeApp(firebaseConfig);

module.exports = admin;