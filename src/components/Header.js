import React from 'react';
import {Link} from 'react-router-dom';
import firebase from "firebase";
import ModalDialog from "./widgets/ModalDialog";

function Header(props) {

    const userSignOut = () => {
        firebase.auth().signOut().then(function() {
            props.signOut();
            this.props.history.push('/');
        }).catch(function(error) {
            // An error happened.
        });
    }
    return (
        <nav className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav app-width">
            <ul className="nav navbar-nav">
                <Link to={"/"} className="nav-link">
                    <li>Home</li>
                </Link>
                <Link to={"/about"} className="nav-link">
                    <li className="nav-item">About</li>
                </Link>
            </ul>
            {!props.userName ?
            <div className="ml-auto nav-content order-3 order-md-3">
                <ul className="ml-auto nav navbar-nav">
                    <Link to={"/signin"} className="nav-link">
                        <li className="nav-item">SignIn</li>
                    </Link>
                    <Link to={"/signup"} className="nav-link">
                        <li className="nav-item">SignUp</li>
                    </Link>
                </ul>
            </div>
                :
                <div className="ml-auto nav-content order-3 order-md-3">
                    <ul className="ml-auto nav navbar-nav">
                        <li className="nav-item text-white-50 nav-link">{props.userName}</li>
                        <ModalDialog userSignOut={userSignOut}/>
                    </ul>
                </div>}
        </nav>
    );
}

export default Header;
