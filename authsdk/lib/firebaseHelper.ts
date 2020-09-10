import "firebase/analytics";
import "firebase/auth";
import firebase from "firebase/app";

let _app: firebase.app.App | null = null;

export function getApp() {
    if (_app) return _app;
    if (firebase.apps.length > 0) {
        return (_app = firebase.app());
    } else {
        _app = firebase.initializeApp({
            apiKey: "AIzaSyC474zHM1SoHR39bbWGquN56XLB52ltCbo",
            authDomain: "fir-auth-exercise-4a98f.firebaseapp.com",
            databaseURL: "https://fir-auth-exercise-4a98f.firebaseio.com",
            projectId: "fir-auth-exercise-4a98f",
            storageBucket: "fir-auth-exercise-4a98f.appspot.com",
            messagingSenderId: "528404982620",
            appId: "1:528404982620:web:184ad3a8f381bead8cef99",
            measurementId: "G-VP41M303B4"
        });
        return _app;
    }
}

export function getAuth() {
    return getApp().auth();
}

export async function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
    } catch (error) {
        console.error("login failed", error);
    }
}

// @ts-ignore
globalThis._app = firebase;
export async function logout() {
    try {
        const user = await firebase.auth().signOut();
        console.log(user);
    } catch (error) {
        console.error("login failed", error);
    }
}