import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOj0m8MRN7QqUkfR-jqskidYF5SWMmQqg",
    authDomain: "portofolio-chat-87024.firebaseapp.com",
    projectId: "portofolio-chat-87024",
    storageBucket: "portofolio-chat-87024.appspot.com",
    messagingSenderId: "35602680239",
    appId: "1:35602680239:web:769172343801702f64c75a",
    measurementId: "G-5R54ZSYF20"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
