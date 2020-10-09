import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAffctzVm_IFc5wmAbvFwNDbWkw31Fjtik",
  authDomain: "shoppbrasilia.firebaseapp.com",
  databaseURL: "https://shoppbrasilia.firebaseio.com",
  projectId: "shoppbrasilia",
  storageBucket: "shoppbrasilia.appspot.com",
  messagingSenderId: "267548481716",
  appId: "1:267548481716:web:1bf6a197b29eb04d429fe1",
  measurementId: "G-C56MCRL0LC"
  };
  // Initialize Firebase
  

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;



