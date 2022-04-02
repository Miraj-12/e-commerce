import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const config = {
    apiKey: "AIzaSyCNWcGl7-d_IWoAILrrHB1FnaztJOi8TpA",
    authDomain: "e-commerce-e6c66.firebaseapp.com",
    projectId: "e-commerce-e6c66",
    storageBucket: "e-commerce-e6c66.appspot.com",
    messagingSenderId: "1061788333837",
    appId: "1:1061788333837:web:495c16fd31df9892aaa244",
    measurementId: "G-5DPHEZX7NG"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
}



export default firebase;








// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// const config = {
//     apiKey: "AIzaSyCNWcGl7-d_IWoAILrrHB1FnaztJOi8TpA",
//     authDomain: "e-commerce-e6c66.firebaseapp.com",
//     projectId: "e-commerce-e6c66",
//     storageBucket: "e-commerce-e6c66.appspot.com",
//     messagingSenderId: "1061788333837",
//     appId: "1:1061788333837:web:495c16fd31df9892aaa244",
//     measurementId: "G-5DPHEZX7NG"
// };
// const firebase = initializeApp(config)

// export const auth = getAuth(firebase);
// export const firestore = getFirestore;


// export const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// export default firebase;


// const provider = new GoogleAuthProvider();
// export const signInWithGoogle =
//     signInWithPopup(auth, provider)
//         .then((result) => {

//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;

//             const user = result.user;
//             // ...
//         }).catch((error) => {

//             const errorCode = error.code;
//             const errorMessage = error.message;

//             const email = error.email;

//             const credential = GoogleAuthProvider.credentialFromError(error);

//         })
