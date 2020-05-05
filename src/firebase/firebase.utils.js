import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGyELQu6KThHakgWZMc1yS0BcrUnDD9m4",
  authDomain: "clothing-d182a.firebaseapp.com",
  databaseURL: "https://clothing-d182a.firebaseio.com",
  projectId: "clothing-d182a",
  storageBucket: "clothing-d182a.appspot.com",
  messagingSenderId: "1067483635635",
  appId: "1:1067483635635:web:23cde6ffd5e43ae72ef5c6",
  measurementId: "G-88SRX1M45C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
