import React from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function SignIn(props) {

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
        }
    };

    // Listen to the Firebase Auth state and set the local state.
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user != null){
                    props.history.push('/');
                }
            }
        );
    }, [props]);
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                {props.signUp ? <h3>SignUp</h3> : <h3>SignIn</h3>}
            </div>
            <div className="d-flex justify-content-center">
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        </div>
    );
}

export default SignIn;