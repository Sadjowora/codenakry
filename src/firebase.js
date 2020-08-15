
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAHipc8S7cyTLQD_1AQ35Et7hO8sPRN40I",
    authDomain: "codenakry.firebaseapp.com",
    databaseURL: "https://codenakry.firebaseio.com",
    projectId: "codenakry",
    storageBucket: "codenakry.appspot.com",
    messagingSenderId: "1043292488491",
    appId: "1:1043292488491:web:1c65c9ef6111265044bb6e",
    measurementId: "G-Q4Q6PYNS6B"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;