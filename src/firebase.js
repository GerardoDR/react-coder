import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, EmailAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

const providerG = new GoogleAuthProvider();
const providerE = new EmailAuthProvider();


export const signInWithGoogle = () => {
  signInWithPopup(auth, providerG).then((result) => console.log(result)).catch((error) => console.log(error))
}

export const signUpWithEmail = (mail, pwd) =>{
  createUserWithEmailAndPassword(auth,mail,pwd).then((credentials) => console.log(credentials)).catch((error)=> console.log(error))
}

export const signInWithEmail = (mail, pwd) => {
  signInWithPopup(auth,providerE).then((result)=> console.log(result)).catch((error)=> console.log(error))
}

export const col = collection(db, "productos");
