import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDL1PCbAJGkMJsV7utnkmDUvikdnQJWdeQ",
    authDomain: "vue-firebase-demo-fc0f1.firebaseapp.com",
    databaseURL: "https://vue-firebase-demo-fc0f1.firebaseio.com",
    projectId: "vue-firebase-demo-fc0f1",
    storageBucket: "vue-firebase-demo-fc0f1.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SEND_ID"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore