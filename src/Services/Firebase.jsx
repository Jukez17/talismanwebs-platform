// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgzeu3DmwFtLF_xvJVdHeLQKqpLpYDfsA",
    authDomain: "talismanwebs-platform.firebaseapp.com",
    databaseURL: "https://talismanwebs-platform.firebaseio.com",
    projectId: "talismanwebs-platform",
    storageBucket: "talismanwebs-platform.appspot.com",
    messagingSenderId: "822144056781",
    appId: "1:822144056781:web:80fdc21182126c46f21884",
    measurementId: "G-2XH0N8S3NN"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;