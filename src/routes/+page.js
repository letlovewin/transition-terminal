
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
export const ssr = false;
