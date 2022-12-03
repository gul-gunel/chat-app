import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAMfdxCys-txzcNpoVvAkvvBJ-TsFtOEp0",
	authDomain: "blog-vue3-1b1b5.firebaseapp.com",
	projectId: "blog-vue3-1b1b5",
	storageBucket: "blog-vue3-1b1b5.appspot.com",
	messagingSenderId: "387009422274",
	appId: "1:387009422274:web:ec4babc665c6dbc447ac5b"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, timestamp, projectAuth }
