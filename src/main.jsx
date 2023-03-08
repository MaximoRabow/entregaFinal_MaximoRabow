import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ4Ev8okmRbtzE4_xEFx2zK7SOrtu_TQo",
  authDomain: "maxrabow-tfreact.firebaseapp.com",
  projectId: "maxrabow-tfreact",
  storageBucket: "maxrabow-tfreact.appspot.com",
  messagingSenderId: "734844973433",
  appId: "1:734844973433:web:e84f38550527b4e3d53fa8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
