import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6zYtHmtOOJow-0nDbAWOJfl1s7z1s8dU",
  authDomain: "crown-db-93ab5.firebaseapp.com",
  databaseURL: "https://crown-db-93ab5.firebaseio.com",
  projectId: "crown-db-93ab5",
  storageBucket: "crown-db-93ab5.appspot.com",
  messagingSenderId: "380446106260",
  appId: "1:380446106260:web:38fa2dbc8be7b0c237ca81",
  measurementId: "G-TBWEYTSXYM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
