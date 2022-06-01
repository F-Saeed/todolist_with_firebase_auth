import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOka0NyhrtvdX3hQihX0yVgHQ3m9f6Alg',
  authDomain: 'todo-list-720.firebaseapp.com',
  projectId: 'todo-list-720',
  storageBucket: 'todo-list-720.appspot.com',
  messagingSenderId: '770009943120',
  appId: '1:770009943120:web:02fbc5adb060ee2cbc9555',
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize firestore
const db = getFirestore();

export { db };
