import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEBC0qM9J8Wk20uxKVr1QxFcBF34lO_Sw",
  authDomain: "webassignment3-ddb01.firebaseapp.com",
  projectId: "webassignment3-ddb01",
  storageBucket: "webassignment3-ddb01.appspot.com",
  messagingSenderId: "2242019473",
  appId: "1:2242019473:web:c4968b05f218ef57417f30",
  measurementId: "G-0YVKG2VTCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};