import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
      }
    
    

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
          } = this.state;
          console.log("Props: ",this.props);
        return (
            <div>
                <h1>User Sign Up</h1>
                <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text"
                  value={firstName} 
                  onChange={this.change} 
                  placeholder="First Name" />
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text"
                  value={lastName} 
                  onChange={this.change} 
                  placeholder="Last Name" />
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="text"
                  value={emailAddress} 
                  onChange={this.change} 
                  placeholder="Email Address" />

                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />
              </React.Fragment>
            )} />
                <p>
                Already have a user account? <Link to="/signin">Click here</Link> to sign in!
                </p>
            </div>
            
        )
    }
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
      }
    
    submit = () => {
      //console.log("Form Submitted");
      const { context } = this.props;
      console.log("Context Data",context);
      const {
        firstName,
        lastName,
        emailAddress,
        password,
      } = this.state;

      const user = {
        firstName,
        lastName,
        emailAddress,
        password,
      };

      // TODO: Fix Errors returning as undefined, no errors returned
      console.log("User: ", user);
      context.data.createUser(user)
      .then( errors => {
        console.log("Errors: ", errors);
        if (errors.length) {
          //this.setState({errors});
          console.log("Errors: ",errors);
        } else {
          console.log(`${firstName} is successfully signed up and authenticated.`);
          // Send to Login Page (Protected Route)
        }
      })
      .catch( err => {
        console.log(err);
        this.props.history.push('/error');
      });
    }
    //TODO: Fix No access to props. 
    cancel = () => {
      console.log("Props History", this.props.history);
      //this.props.history.push('/');
    }
}
