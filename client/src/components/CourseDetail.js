// adapted code from React-Authentication-Api-Project
import React from 'react';

const CourseDetail = ({title,description}) => (
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
            <div class="actions--bar">
                <div class="wrap">
                    <a class="button" href="update-course.html">Update Course</a>
                    <a class="button" href="#">Delete Course</a>
                    <a class="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>
            
            <div class="wrap">
                <h2>{title}</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <h3 class="course--detail--title">Course</h3>
                            <h4 class="course--name">Build a Basic Bookcase</h4>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3 class="course--detail--title">Estimated Time</h3>
                            <p>14 hours</p>

                            <h3 class="course--detail--title">Materials Needed</h3>
                            <ul class="course--detail--list">
                                <li>1/2 x 3/4 inch parting strip</li>
                                <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
);

export default CourseDetail;

