// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase.auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL4uW3lpk-DDGZtV-AiAXniqmrG_lcZoA',
  authDomain: 'bad-bank-96fc7.firebaseapp.com',
  projectId: 'bad-bank-96fc7',
  storageBucket: 'bad-bank-96fc7.appspot.com',
  messagingSenderId: '667137165522',
  appId: '1:667137165522:web:49dad5fadb8d787667050b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default { app, auth };
