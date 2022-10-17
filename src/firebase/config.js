import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBY7s2dcVjsHw6BOMQdeFR_ItMgoowaeWg',
  authDomain: 'kiura-firegram.firebaseapp.com',
  projectId: 'kiura-firegram',
  storageBucket: 'kiura-firegram.appspot.com',
  messagingSenderId: '729987427165',
  appId: '1:729987427165:web:9260f04a01d365792996b4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
