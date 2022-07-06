const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {
    constructor() {
        this._config = {
            apiKey: "AIzaSyBlR2t-hiMKdi1fu8v_u5MaTbAfXTV0DZQ",
            authDomain: "whatsapp-clone-rv.firebaseapp.com",
            projectId: "whatsapp-clone-rv",
            storageBucket: "gs://whatsapp-clone-rv.appspot.com",
            messagingSenderId: "724171599588",
            appId: "1:724171599588:web:a24a9beb99a3d18ceb86f1"
        };

        this.init();
    }

    init() {
        if (!window._initializedFirebase) {
            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                timestampsInSnapshots: true
            })
            window._initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(result => {

                let user = result.user;
                let token = result.credential.idToken;
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