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
       await this.getCourses();
        
    }

    getCourses = async ()=> {
        const { context } = this.props; 
        const courses = await context.data.getCourses();
  
        this.setState({
            courses,
            loading:false
        })
    }

    // arrow function this keywords refers to outer scope
    deleteCourse = async (id) => {
        console.log("STATE",this.state);
        await this.props.context.data.deleteCourse(id);
        await this.getCourses();
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
                  {!loading && courses.map((course,index)=>{
                      return(
                          <div key={course.id}>

                        <CourseDetail 
                            id={course.id}
                            title={course.title} 
                            description={course.description} 
                            estimatedTime={course.estimatedTime} 
                            materialsNeeded={course.materialsNeeded} 
                            createdAt={course.createdAt}
                            updatedAt={course.updatedAt}
                            userId={course.userId}
                            deleteCourse={this.deleteCourse}
                        />
                        </div>
                      )
                  })}

                </div>
            </div>
        )
        
    };
}