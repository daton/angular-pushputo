
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');



/**** aqui esta lo necesario para frebase  PERO MARAR ERROR LA MAMAMAD*/
firebase.initializeApp({
  messagingSenderId: '181953839266',
  apiKey: "AIzaSyBzTK4rDf3XT-r_waqm46gfYsJdRR813dU",
    authDomain: "salud-unitec.firebaseapp.com",
    databaseURL: "https://salud-unitec.firebaseio.com",
    projectId: "salud-unitec",
    storageBucket: "salud-unitec.appspot.com",
    messagingSenderId: "181953839266",
    appId: "1:181953839266:web:9cfb0b9141887ef9"

});

const messaging = firebase.messaging();


//Aqui termina lo de firebase mamadas *******************************************************


//Todos  pero no se porque marc eror la mamada
console.log('Hello from service-worker.js camuflajeado con angular firebse');


