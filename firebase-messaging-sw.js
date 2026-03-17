
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyARBw3pgnhRbEjxywrKIWTftMsA1KPVf8g",
  authDomain: "shishirise.firebaseapp.com",
  projectId: "shishirise",
  messagingSenderId: "488840494684",
  appId: "1:488840494684:web:446724e7de437d510f3099"
});

const messaging = firebase.messaging();

// 🔔 Background notification (when app closed)
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
