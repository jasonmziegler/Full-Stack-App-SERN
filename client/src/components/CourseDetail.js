// adapted code from React-Authentication-Api-Project
import React from 'react';
import { Link } from 'react-router-dom';
const CourseDetail = ({id,title,description,estimatedTime,materialsNeeded,createdAt,updatedAt,userId}) => (
    <div id="root">
         {/* <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header> */}
        <main>
            <div className="actions--bar">
                <div className="wrap">
                <Link to={`/update-course/${id}`}>
                <h3>
                Update Course
                </h3>
                </Link>
                    <a className="button" href="#">Delete Course</a>
                    {/* <a className="button button-secondary" href="index.html">Return to List</a> */}
                </div>
            </div>
            
            <div className="wrap">
                <form>
                    <div className="main--flex">
                        <div>
                            <h2>Course Id: {id}</h2>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{title}</h4>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                {materialsNeeded}
                            </ul>                    
                        </div>
                        <div>
                            <h3 className="course--detail--title">Created At</h3>
                            <h4 className="course--name">{createdAt}</h4>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Updated At</h3>
                            <h4 className="course--name">{updatedAt}</h4>
                        </div>
                        <div>
                            <h3 className="course--detail--title">userId</h3>
                            <h4 className="course--name">{userId}</h4>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
);

export default CourseDetail;

