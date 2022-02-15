import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

 const firebaseConfig = {
  apiKey: "AIzaSyBcp37_kWKuGFmNgbcEwZbmGhiNaUcxPLM",
  authDomain: "dayana-photospace.firebaseapp.com",
  databaseURL: "https://dayana-photospace-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dayana-photospace",
  storageBucket: "dayana-photospace.appspot.com",
  messagingSenderId: "415705365780",
  appId: "1:415705365780:web:ba9595f5766c2f82209601"
};

const app = initializeApp(firebaseConfig);

export const DATABASE_URL = 'https://dayana-photospace-default-rtdb.europe-west1.firebasedatabase.app'

export default getFirestore()