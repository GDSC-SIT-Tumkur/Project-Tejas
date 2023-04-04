import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });
  import "https://;www.gstatic.com/firebasejs/8.2.9/firebase-app.js";
  import "https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"
  import "https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"

    const firebaseConfig = {
      apiKey: "AIzaSyC6H7LSauuQykXGwPTAKJBA4A7L42q-7EU",
      authDomain: "pwa-db-6a606.firebaseapp.com",
      projectId: "pwa-db-6a606",
      storageBucket: "pwa-db-6a606.appspot.com",
      messagingSenderId: "646192569456",
      appId: "1:646192569456:web:5a055e8ed0c78e598f68b5"
    };
    firebase.initializeApp(firebaseConfig);
  import "firebase.js"