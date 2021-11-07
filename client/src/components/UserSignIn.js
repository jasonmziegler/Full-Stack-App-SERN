import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignIn extends Component {

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <p><Link to='/'>Cancel</Link></p>
            </div>
        )
    }
}