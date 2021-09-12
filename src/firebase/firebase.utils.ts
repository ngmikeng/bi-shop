// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, User } from "firebase/auth";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();


export const auth = getAuth();
export const firestore = getFirestore();

// Google sign in with popup
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
};


export const createUserProfileDocument = async (userAuth: User, additionalData: any = {}) => {
  if (!userAuth) {
    return;
  }

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  return userRef;
}

export const createUserWithEmailPassword = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
}
