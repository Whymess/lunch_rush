import firebase from 'firebase';

  var config = {
    apiKey: 'AIzaSyCai0LOWUH4JMYLKwX8WNlGAnkSI3J5P24',
    authDomain: 'lunch-rush-169d6.firebaseapp.com',
    databaseURL: 'https://lunch-rush-169d6.firebaseio.com',
    projectId: 'lunch-rush-169d6',
    storageBucket: 'lunch-rush-169d6.appspot.com',
    messagingSenderId: '108126484284'
  };

  
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

