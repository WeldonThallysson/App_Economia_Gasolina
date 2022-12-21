import firebase from "firebase/app";
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBDmrrbpHVGT58cOha56UrfBflK4F3B_jU",
    authDomain: "cursofirebase-fb31f.firebaseapp.com",
    projectId: "cursofirebase-fb31f",
    storageBucket: "cursofirebase-fb31f.appspot.com",
    messagingSenderId: "309799194080",
    appId: "1:309799194080:web:ebf250e131385e84676f85",
    measurementId: "G-4NGRFEKT2L"
  };


  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  }


  export default firebase