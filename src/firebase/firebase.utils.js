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

//We get the user from the authentication and we need to store the required information about the user

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Query the db if the user exists or not
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user :", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
