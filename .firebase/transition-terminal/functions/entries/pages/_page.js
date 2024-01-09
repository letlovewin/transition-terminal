import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../../chunks/index.js";
const firebaseConfig = {
  apiKey: "AIzaSyBp1KKYhd_M5SK4y5Ofi8M7H-EjAotAWdo",
  authDomain: "lambda-community.firebaseapp.com",
  projectId: "lambda-community",
  storageBucket: "lambda-community.appspot.com",
  messagingSenderId: "316292399888",
  appId: "1:316292399888:web:40ddc69203c6c8c8c81b95",
  measurementId: "G-FGHWYFCPDN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
});
function load({ params }) {
}
export {
  load
};
