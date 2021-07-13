import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAycBEpfRzcn2f66vjlWBa1yVMZqGnuepY",
    authDomain: "react-take-home.firebaseapp.com",
    databaseURL: "https://react-take-home-default-rtdb.firebaseio.com",
    projectId: "react-take-home",
    storageBucket: "react-take-home.appspot.com",
    messagingSenderId: "241051071135",
    appId: "1:241051071135:web:6bccfd3284fafe65aa28aa"
};
// Initialize Firebase
let firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();