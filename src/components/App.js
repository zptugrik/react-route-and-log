import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from "firebase";
import Loader from 'react-loader-spinner';
import Clock from 'react-live-clock';

import Header from './Header';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyBiTApoj94gTDS_tPsXf_ACdvtA466j72E',
    authDomain: 'route-and-log.firebaseapp.com'
};
firebase.initializeApp(config);

function App() {
    const [userName, setUserName] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsLoaded(true);
            if(user != null) setUserName(user.displayName);
        });
    }, []);

    const signOut = () => {
        setUserName(false);
    }

    if (!isLoaded) {
        return(
                <div className="d-flex justify-content-center align-items-center">
                    <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={0}
                    />
                </div>
        );
    }
    return (
            <div className="container">
                <Router>
                    <div className="row">
                        <Header userName={userName} signOut={signOut}/>
                    </div>
                    <Route path={"/"} exact render={(props) => <Home userName={userName}/>}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/signin"} component={SignIn}/>
                    <Route path={"/signup"} render={(props) => <SignIn {...props} signUp={true}/>}/>
                </Router>
                <div className="navbar fixed-bottom container bg-dark">
                    <div></div>
                    <div className="text-white">
                        <Clock  format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
