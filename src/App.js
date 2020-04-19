import React from 'react';
import './App.css';
import AllUser from '../src/Component/AllUser/AllUser';
import firebaseConfig from '../src/firebaseConfig';

import '../src/'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);


function App() {
  
  return (
  
    <div>
  
    <div className= "App"> <h1>Facebook</h1></div>
    
   
     
    
    
    <AllUser></AllUser>
    
    </div>
    
  );
  
}

export default App;
