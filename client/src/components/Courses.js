// adapted code from React-Authentication-Api-Project
import React, {Component} from 'react';


export default class Courses extends Component {
    constructor() {
        super();
        this.state = {
            courses: []
        }
    }
    render() {
        const { context } = this.props;
        const courses = context.data.getCourses();
        console.log(courses);
        return(
            <div>
                <div>
                    <h1>Welcome to the Course App</h1>   
                    <p>This will be a course list"</p>
                </div>
            </div>
        )
        
    };
}