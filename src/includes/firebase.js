import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_hUyQdXuN5P9zWt0xjODswUr082zGWuk',
  authDomain: 'music-cba3f.firebaseapp.com',
  projectId: 'music-cba3f',
  storageBucket: 'music-cba3f.appspot.com',
  appId: '1:703405943926:web:e327fd827a3f1e6b5b4357',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
