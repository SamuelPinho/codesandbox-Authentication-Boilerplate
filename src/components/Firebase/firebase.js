import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDo3NQJ_ZqTpZXnQuWs7abuhC8POXR3-vI",
  authDomain: "authentication-boilerpla-8faaf.firebaseapp.com",
  databaseURL: "https://authentication-boilerpla-8faaf.firebaseio.com",
  projectId: "authentication-boilerpla-8faaf",
  storageBucket: "authentication-boilerpla-8faaf.appspot.com",
  messagingSenderId: "1061191687741"
};

class Firebase {
  constructor() {
    this.app = !app.apps.length ? app.initializeApp(config) : app.app();
    // app.initializeApp(config);

    this.auth = app.auth();
    this.firestore = app.firestore();

    this.usersCollection = this.firestore.collection("users");
  }

  handleCreateUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  handleLogin = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  handleLogout = () => this.auth.signOut();

  handleRecoverPassword = email => this.auth.sendPasswordResetEmail(email);

  handleChangePassword = password => this.auth.updatePassword(password);
}

export default Firebase;
