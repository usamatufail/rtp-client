import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDBj6AwpO7VvohoF4tIJj0EXyAhXgz7vvc',
  authDomain: 'rich-to-poor.firebaseapp.com',
  databaseURL: 'https://rich-to-poor.firebaseio.com',
  projectId: 'rich-to-poor',
  storageBucket: 'rich-to-poor.appspot.com',
  messagingSenderId: '460258280746',
  appId: '1:460258280746:web:dff1c340ea1f9b6bf24a53',
  measurementId: 'G-8J6RER8YKC',
});

export const auth = app.auth();
export const db = app.firestore();

export default app;
