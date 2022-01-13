import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBVTfm7P8zHljaUhw3btiZSCpldyIpaIXo",
    authDomain: "elolimpio-d7fb6.firebaseapp.com",
    projectId: "elolimpio-d7fb6",
    storageBucket: "elolimpio-d7fb6.appspot.com",
    messagingSenderId: "618508325421",
    appId: "1:618508325421:web:6d4005cc097272b7549ea4",
    measurementId: "G-P8GECP5YWB"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)