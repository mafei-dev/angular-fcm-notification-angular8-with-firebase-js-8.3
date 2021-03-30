importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyCdmzpRXmZd4zFyoVvrl2VyilZzzcO2FfI",
  authDomain: "seeker-4f3dd.firebaseapp.com",
  projectId: "seeker-4f3dd",
  storageBucket: "seeker-4f3dd.appspot.com",
  messagingSenderId: "188355372926",
  appId: "1:188355372926:web:d699c91dbf7fc7ba84f52f"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
