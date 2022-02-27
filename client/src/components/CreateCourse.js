// adapted code from React-Authentication-Api-Project
import React,{useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
// import { useHistory } from 'react-router-dom';
const CreateCourse = (props) => {
    const [title,setTitle] = useState("test");
    const [description,setDescription] = useState("test");
    const [estimatedTime,setEstimatedTime] = useState("test");
    const [materialsNeeded,setMaterialsNeeded] = useState("test");

    async function createCourse(e) {
        e.preventDefault();
        try{
          const response = await axios.post(`http://localhost:5000/api/courses`,{
                title,
                description,
                estimatedTime,
                materialsNeeded,
                //TODO: get user from authentication (user is required to create the course)
                userId:1,
          });
          return response;
          
        }catch(err){
          console.log("err",err.response);
        }
    }
    return(
        <main>
        <div className="wrap">
            <h2>Create Course</h2>
            <div className="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                    <li>Please provide a value for "Title"</li>
                    <li>Please provide a value for "Description"</li>
                </ul>
            </div>
            <form onSubmit={createCourse}>
                <div className="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={e=>setTitle(e.target.value)}/>

                        <p>By Joe Smith</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={e=>setEstimatedTime(e.target.value)} />

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={e=>setMaterialsNeeded(e.target.value)}></textarea>
                    </div>
                </div>
                <button className="button" type="submit" >Create Course</button> <Link to="/">Go Back</Link>
            </form>
        </div>
    </main>
    )
}

export default CreateCourse;