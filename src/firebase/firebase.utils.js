import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4NYLfxzT5SfVFyhkY3QbFPCyh--gacNg",
    authDomain: "ecomm-clothing-reactjs-db.firebaseapp.com",
    databaseURL: "https://ecomm-clothing-reactjs-db.firebaseio.com",
    projectId: "ecomm-clothing-reactjs-db",
    storageBucket: "ecomm-clothing-reactjs-db.appspot.com",
    messagingSenderId: "676316834140",
    appId: "1:676316834140:web:0d536b5b604a29154bf999",
    measurementId: "G-R3N66SV00L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
