import * as firebase from 'firebase/app';
import 'firebase/messaging';
 

const config = {
    apiKey: "AIzaSyD66K_ugp8Go8MXzlb3R_3MT1UUfjBeBOE",
    authDomain: "expense-tracker-618c9.firebaseapp.com",
    databaseURL: "https://expense-tracker-618c9.firebaseio.com",
    projectId: "expense-tracker-618c9",
    storageBucket: "expense-tracker-618c9.appspot.com",
    messagingSenderId: "628316764428",
    appId: "1:628316764428:web:9e20779cbcda31560c7129"
}

firebase.initializeApp(config);
export default firebase;