import firebase from 'firebase'

var firebaseConfig = {
	apiKey: 'AIzaSyCPRVEdW1XlOQg-vskha_i4oIZNb53UQZ4',
	authDomain: 'todo-redux-eebe1.firebaseapp.com',
	projectId: 'todo-redux-eebe1',
	storageBucket: 'todo-redux-eebe1.appspot.com',
	messagingSenderId: '89390038734',
	appId: '1:89390038734:web:a67fdc1022ff08feccda9f',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
