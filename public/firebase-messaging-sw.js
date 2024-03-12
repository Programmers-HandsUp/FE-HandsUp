/* eslint-disable no-undef */

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCVgNzwmiHS6FncofAjZmfBZfhSQ2HR0ko",
  projectId: "hands-up-6a33b",
  messagingSenderId: "414381577440",
  appId: "1:414381577440:web:f8aa7e36f17b323b8eac85"
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/assets/icons/icon-512x512.png"
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
