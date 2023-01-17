import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signOut, sendPasswordResetEmail } from "firebase/auth";
import { history } from "../App";
import { auth } from "../firebase";
const provider = new GoogleAuthProvider();

const saveuserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
}

export const signUpEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            saveuserData(user);
            history.push("/verify");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

}

export const signInEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            saveuserData(user);
            console.log(user);
            history.push("/dashboard");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

export const signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.clear();
        history.push("/");
        console.log("Sign-out successful");
    }).catch((error) => {
        // An error happened.
        console.log("sign out failed");
    });
}

export const GoogleLogin = () => {
    console.log("object");
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            saveuserData(user);
            history.push("/dashboard");
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
        });
}

export const verifyEmail = async () => {
    if (auth.currentUser.emailVerified == false) {
        await sendEmailVerification(auth.currentUser)

        let interval = setInterval(async () => {
            if (auth.currentUser.emailVerified) {
                clearInterval(interval);
                history.push("/dashboard");
            }
            await auth.currentUser.reload();
        }, 2000);
    }
    else {
        history.push("/dashboard");
    }
}

export const passwordReset = (email) => {
    console.log("hello");
    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("password reset");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}