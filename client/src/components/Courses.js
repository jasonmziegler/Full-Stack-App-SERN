// adapted code from React-Authentication-Api-Project
import React, {Component} from 'react';
import CourseDetail from './CourseDetail';
import {Link} from "react-router-dom"
// class component is stateful component
export default class Courses extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            loading:true,
            courses: []
        }
    }
   async componentDidMount() {
        const { context } = this.props; 
        const courses = await context.data.getCourses();
        console.log('courses',courses)
        this.setState({
            courses,
            loading:false
        })
        
    }
    
    
    render() {
        let{loading,courses} = this.state;
        //console.log("context", context);
        
        //console.log("Course 1", this.state.courses);
        return(
            <div>
                <div>
                    <h1>Welcome to the Course App</h1>   
                    <p>This will be a course list"</p>
                    <Link to="/create-course">
                    <h3>
                    Create Course
                    </h3>
                    </Link>
                  {!loading && courses.map((course)=>{
                      return(
                          <div key={()=>course.id.toString()}>

                        <CourseDetail 
                            id={course.id}
                            title={course.title} 
                            description={course.description} 
                            estimatedTime={course.estimatedTime} 
                            materialsNeeded={course.materialsNeeded} 
                            createdAt={course.createdAt}
                            updatedAt={course.updatedAt}
                            userId={course.userId}
                        />
                        </div>
                      )
                  })}

                </div>
            </div>
        )
        
    };
}