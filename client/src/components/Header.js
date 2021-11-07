import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.PureComponent {
    render() {
        return(
            <div>
                <h1>Course App</h1>
                <nav>
                    {/* From TreeHouse React Authentication Course */}
                    <React.Fragment>
                        {/* <Link className="signup" to="/signup">Sign Up</Link> */}
                        <Link className="signin" to="/signin">Sign In</Link>
                    </React.Fragment>
                </nav>
            </div>
        );
    }
}