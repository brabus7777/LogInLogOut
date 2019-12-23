import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAA0Nnk7bqpe-Ta-0y7ZsO567AiOj0Sl58",
    authDomain: "artem-test-a4ccb.firebaseapp.com",
    databaseURL: "https://artem-test-a4ccb.firebaseio.com",
    projectId: "artem-test-a4ccb"
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;