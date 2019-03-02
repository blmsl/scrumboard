importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': 'BG_w4GlvDUJ4mbkkZZjgavregfO3nL9V0AJu9DZW9aQH3_sutbCGkvxhD3Rs8OoFWYX3r0-5AFHYuxtefvz8t8A'
});

const messaging = firebase.messaging();
