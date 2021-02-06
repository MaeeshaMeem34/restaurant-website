import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA7a1Ka9jVBYpYrEiGHx0sYuXRi5C7bIs4",
    authDomain: "restaurant-website-7969c.firebaseapp.com",
    projectId: "restaurant-website-7969c",
    storageBucket: "restaurant-website-7969c.appspot.com",
    messagingSenderId: "209983272363",
    appId: "1:209983272363:web:d8ceebed20076416c44eee"
});

const auth= app.auth();
const db = app.firestore();
const storage = app.storage();

export {auth, db, storage};
export default app;