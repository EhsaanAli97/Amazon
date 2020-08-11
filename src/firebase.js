import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBwMR5V9z4N0qj4RoEo5yPhUDaDyUUXY3Q',
	authDomain: 'amazzon-842e1.firebaseapp.com',
	databaseURL: 'https://amazzon-842e1.firebaseio.com',
	projectId: 'amazzon-842e1',
	storageBucket: 'amazzon-842e1.appspot.com',
	messagingSenderId: '271235339957',
	appId: '1:271235339957:web:d87763cb8c740a712c10fc',
	measurementId: 'G-59CPN5MZYJ',
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
