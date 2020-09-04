import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyArXI2lh9guhG-vt_Jv6vzn7kb3y8_uK9I',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: 'dropcap-69bb2',
    databaseUrl: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firebase;
