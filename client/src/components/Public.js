//Adapted from the React Authentication Project in TreeHouse
import React, { Component } from 'react';
const axios = require('axios');

// console.log('Public Component');

export default class Courses extends Component {

    render() {

        //code example from Axios docs
        axios.get('http://localhost:5000/api/courses/1')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log('This will always run');
        });
        return (
            <div>
                <div>
                    <h1>Welcome to the Course App</h1>
                </div>
            </div>
        );
    }
}