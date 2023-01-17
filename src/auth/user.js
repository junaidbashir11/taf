import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export const updateUserProfile = (data) => {
    const { firstName, lastName } = data;
    console.log(data);
    updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName
    }).then(() => {
        console.log("updated profile");
    }).catch((error) => {
        // An error occurred
        // ...
    });
}
