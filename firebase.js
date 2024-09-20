import {
    initializeApp
}
    from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    deleteField,
    documentId
}
    from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
    getStorage,
    ref,
    deleteObject,
    uploadBytesResumable,
    getDownloadURL
}
    from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
    from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDR2TMHa6kXaxgp22zt5dRajsomIX76tXo",
        authDomain: "nawal-df591.firebaseapp.com",
        projectId: "nawal-df591",
        storageBucket: "nawal-df591.appspot.com",
        messagingSenderId: "530372473705",
        appId: "1:530372473705:web:48b1fb2d1475b528cec3f8"
      };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    app,
    getFirestore,
    db,
    collection,
    addDoc,
    getDocs,
    getStorage,
    ref,
    deleteObject,
    doc,
    deleteDoc,
    updateDoc,
    deleteField,
    documentId,
    getAuth,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    uploadBytesResumable,
    getDownloadURL,
};