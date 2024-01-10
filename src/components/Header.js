import { LOGO_URL, USER_URL } from "../utils/Image";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userslice";
import { useEffect } from "react";


const Header = () => {
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const user = useSelector((store) => store.user)

    // check/craet user and go to the brows page.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const { email, displayName } = user;
                dispatch(adduser({ email: email, displayName: displayName }));
                nevigate("/brows")

                // ...
            } else {
                // User is signed out
                dispatch(removeuser());
                nevigate("/")
                // ...
            }
        });
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            nevigate("/")
        });
    }

    return (
        <div className="absolute w-full z-10 flex justify-between items-center">
            <img src={LOGO_URL} alt="logo" className="ml-4 w-56" />

            {/* if we have brows page */}
            {
                user && <div
                    className="flex">
                    <img
                        className="w-10 h-10  rounded"
                        src={USER_URL} alt="userlogo" />
                    <button
                        className="m-2"
                        onClick={handleSignOut}
                    >(Sign Out)</button>
                </div>
            }
        </div>
    )
}

export default Header;