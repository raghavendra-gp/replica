// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-m6OLegAu1owdoFUPr_6TLcJm7lE2P8o",
  authDomain: "react-image-upload-941ad.firebaseapp.com",
  projectId: "react-image-upload-941ad",
  storageBucket: "react-image-upload-941ad.appspot.com",
  messagingSenderId: "549292312941",
  appId: "1:549292312941:web:b67caead5317369d88f264",
};

// Initialize Firebaseconst imageListRef = ref(storage, "images/");
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
