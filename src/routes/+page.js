
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
const firebaseConfig = {
  apiKey: "AIzaSyDTyfRBAraHLshds-X3p5zwNE8ITnmXYWk",
  authDomain: "transition-terminal.firebaseapp.com",
  databaseURL: "https://transition-terminal-default-rtdb.firebaseio.com",
  projectId: "transition-terminal",
  storageBucket: "transition-terminal.appspot.com",
  messagingSenderId: "314390865424",
  appId: "1:314390865424:web:6b8da509ac009b5dad0c95",
  measurementId: "G-3WXEVRFJVD"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth,(user)=>{
  if(user){
    if (browser) {
      goto('/home')
    }
  } else {
  }
})