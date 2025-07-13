// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx-8V73S2krzxE5loXP66Tlu5eDoGxaFg",
    authDomain: "product-recommendation-b8596.firebaseapp.com",
    projectId: "product-recommendation-b8596",
    storageBucket: "product-recommendation-b8596.firebasestorage.app",
    messagingSenderId: "288980703895",
    appId: "1:288980703895:web:383e6529029248623d27d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);