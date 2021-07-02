import { firebase } from "./firebase";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAO5da-3lLuhZiE1w4d2yhMyk6oB-VhNJo",
    authDomain: "todoist-17d5c.firebaseapp.com",
    databaseURL: "https://todoist-17d5c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todoist-17d5c",
    storageBucket: "todoist-17d5c.appspot.com",
    messagingSenderId: "1038766932410",
    appId: "1:1038766932410:web:e452d542acee0d83205d83"
});

export {firebaseConfig as firebase}