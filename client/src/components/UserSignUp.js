import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignUp extends Component {
    render() {
        return (
            <div>
                <h1>User Sign Up</h1>
                <p>
                Already have a user account? <Link to="/signin">Click here</Link> to sign in!
                </p>
            </div>
            
        )
    }
}
