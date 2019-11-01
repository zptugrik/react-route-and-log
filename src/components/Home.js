import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h3>Home</h3>
            </div>
            {props.userName
                ?
                <div className="d-flex justify-content-center">
                    <p>Welcome, {props.userName}!</p>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <p>Please Log In!</p>
                </div>
            }
        </div>
    );
}

export default Home;