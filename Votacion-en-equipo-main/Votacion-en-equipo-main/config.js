import firebase from 'firebase';

// Agregar SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyCJFQCE0F-ZSQHBoPSEFPitVXhdIGj18qo",
        authDomain: "aplicacion-votacion.firebaseapp.com",
        projectId: "aplicacion-votacion",
        storageBucket: "aplicacion-votacion.appspot.com",
        messagingSenderId: "882165317754",
        appId: "1:882165317754:web:87b65902651a6efe5a7bc3",
        measurementId: "G-MCKX2B1EBQ"
      };
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
 //console.firebase.google.com/project/aplicacion-votacion/database/aplicacion-votacion-default-rtdb/data/~2F?hl=es-419
export default firebase.database();
