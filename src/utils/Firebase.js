import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export class Firebase {
    constructor() {
        this.firebaseApp = initializeApp({
            apiKey: "AIzaSyBlR2t-hiMKdi1fu8v_u5MaTbAfXTV0DZQ",
            authDomain: "whatsapp-clone-rv.firebaseapp.com",
            projectId: "whatsapp-clone-rv",
            storageBucket: "whatsapp-clone-rv.appspot.com",
            messagingSenderId: "724171599588",
            appId: "1:724171599588:web:a24a9beb99a3d18ceb86f1"
        });
    }

    static db() {
        return getFirestore(this.firebaseApp);
    }

    initAuth() {
        return new Promise((s, f) => {
            let authenticate = getAuth();

            signInWithPopup(authenticate, new GoogleAuthProvider()).then(result => {

                let user = result.user;
                let token = result._tokenResponse.oauthAccessToken;
                s({
                   user, 
                   token
                });
            }).catch(err => {
                f(err);
            })
        });
    }
}