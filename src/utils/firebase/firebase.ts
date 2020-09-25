import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyArXI2lh9guhG-vt_Jv6vzn7kb3y8_uK9I',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: 'dropcap-69bb2',
    databaseUrl: process.env.FIREBASE_DATABASE_URL,
    storageBucket: 'dropcap-69bb2.appspot.com',
    messagingSenderId: '916784760284',
    appId: '1:916784760284:web:5621816c4c78090fc83b19',
    measurementId: 'G-P07Z5JTL3F',
  });
}

export default firebase;
