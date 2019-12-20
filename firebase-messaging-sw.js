importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyBz2823-vTmfN9XUHMyXyWhG7fXjcgGMs0",
    authDomain: "push-notification-3692c.firebaseapp.com",
    databaseURL: "https://push-notification-3692c.firebaseio.com",
    projectId: "push-notification-3692c",
    storageBucket: "push-notification-3692c.appspot.com",
    messagingSenderId: "43838738944",
    appId: "1:43838738944:web:e3676d935ccd73baad3ee5",
    measurementId: "G-H57H9LS55W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload){
//     const title = "Hello World!";
//     const options = {
//         body: payload.data.status
//     };
//     return self.ServiceWorkerRegistration.showNotification(title, options);
// });