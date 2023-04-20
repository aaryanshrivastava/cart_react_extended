import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP3oQBppyjWi6atjx32pF-2365lAzuHWg",
  authDomain: "cart-d1dc4.firebaseapp.com",
  projectId: "cart-d1dc4",
  storageBucket: "cart-d1dc4.appspot.com",
  messagingSenderId: "831936287808",
  appId: "1:831936287808:web:2efab279bbf8d184cdfba5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
