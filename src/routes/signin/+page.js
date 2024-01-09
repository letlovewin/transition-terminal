import { initializeApp } from "firebase/app";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { getAuth } from "firebase/auth";
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
let auth = getAuth(app)
auth.onAuthStateChanged((user) => {
    if (user) {
        if (browser) {
            goto('/home')
        }
    }
})

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        context: {
            auth
        }
    }
}