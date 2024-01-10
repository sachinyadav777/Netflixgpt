
import { Link} from "react-router-dom";
import { Image_URL } from "../utils/Image";
import {  useRef, useState } from "react";
import { handleName, handlePassword } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
    const capcha = "<![CDATA[<b>Learn more.</b>]]>";
    const [opacity, setopacity] = useState(0);
    const [isSignInForm, setSignInForm] = useState(false);
    const [nameError, setNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const name = useRef("Sachin");
    const email = useRef(null);
    const password = useRef(null);

    const handleForm = () => {
        setSignInForm(!isSignInForm)
    }

    const handleClickButton = () => {
        const itm = handleName(name?.current?.value);
        setNameError(itm);
        const itm2 = handlePassword(password.current.value);
        setPasswordError(itm2);

        // craete authentication.......

        // sign up and sign in logic.....
        if (isSignInForm) {
            if (itm) return;
            if (itm2) return;

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setPasswordError(errorMessage);
                    console.log(errorCode + errorMessage);
                    // ..
                });
        }
        else {
            if (itm2) return;

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setPasswordError(errorMessage);
                    console.log(errorCode + errorMessage)
                });
        }


    }


    return (
        <div className="overflow-hidden flex justify-center">

            <div className="relative">
                <div className="absolute bg-gradient-to-b from-[#000000a6] top-0 bottom-0 left-0 right-0"></div>
                <img src={Image_URL} alt="bimg" className="max-w-fit" />
            </div>

            <div className="absolute top-24 bg-[rgba(0,0,0,.75)] text-white w-[35%] mx-auto p-16">

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid">
                    <h1 className="text-[32px] mb-3 font-medium ">{isSignInForm ? "Sign Up" : "Sign In"}</h1>

                    {
                        isSignInForm &&
                        <div>
                            <input
                                ref={name}
                                type="text"
                                placeholder="Full Name"
                                className="border-none rounded  p-3 my-5 bg-[#333] text-[#8c8c8c] focus:outline-none w-full"
                            />
                            <span className="absolute top-48 left-20 text-sm text-red-700">{nameError}</span>
                        </div>

                    }

                    <input
                        ref={email}
                        type="email"
                        placeholder="Email or phone number"
                        className="border-none rounded  p-3 my-5 bg-[#333] text-[#8c8c8c] focus:outline-none" />

                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="border-none rounded  p-3 my-0 bg-[#333] text-[#8c8c8c] focus:outline-none" />
                    <span className="font-thin text-red-700 text-sm ml-4">{passwordError}</span>

                    <button
                        type="submit"
                        className="border-none rounded bg-[#e50914] p-3 mt-10"
                        onClick={handleClickButton}>
                        {isSignInForm ? "Sign Up" : "Sign In"}
                    </button>
                    <div
                        className="flex justify-between mt-4 text-[#b3b3b3] text-sm">
                        <label>
                            <input
                                type="checkbox"
                                className="accent-[#5c5b5b] h-4 w-4" />
                            <span
                                className="float-right mt-[-2px]">Remember me
                            </span>
                        </label>
                        <Link to=""
                            className="hover:underline
                             mt-[-2px]">Need help?
                        </Link>
                    </div>
                    <div
                        className="mt-16 text-[#737373]"
                        onClick={handleForm}>
                        {isSignInForm ? "Already Registered?" : "New to Netflix?"}
                        <Link to=""
                            className="text-white hover:underline">
                            {isSignInForm ? "Sign in now" : "Sign up now"}
                        </Link>
                    </div>
                </form>

                <p
                    className="mt-4 text-sm text-[#8c8c8c]">
                    Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
                    <button
                        className="text-[#0071eb] hover:underline"
                        onClick={() => setopacity(5)} >
                        {capcha}
                    </button>
                </p>

                <p
                    className={`mt-4 text-sm opacity-${opacity} transition duration-700 ease-in-out text-[#8c8c8c] `}>
                    The information collected by Google reCAPTCHA is subject to the Google
                    <Link to=""
                        className="text-[#0071eb] hover:underline">
                        Privacy Policy
                    </Link> and
                    <Link to=""
                        className="text-[#0071eb] hover:underline">Terms of Service,
                    </Link>  and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)..
                </p>

            </div>
        </div>
    )
}

export default Login;