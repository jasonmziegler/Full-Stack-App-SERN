// adapted code from React-Authentication-Api-Project
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import axios from "axios";
const UpdateCourse = (props) => {
    const params = useParams();
    const { context } = props; 
    const getCourseById = context.data.getCourseById;
    const courseUpdate = context.data.updateCourse;
    const [course,  setCourse] = useState();
    const [loading,setLoading] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [estimatedTime,setEstimatedTime] = useState("");
    const [materialsNeeded,setMaterialsNeeded] = useState("");

    async function updateSingleCourse(e) {
        e.preventDefault();
        try{
            const payload = {
                title,
                description,
                estimatedTime,
                materialsNeeded,
                courseId:params.id,
                userId:1,
            }
            let response = await courseUpdate(payload);
            return response;

        }catch(err){
            console.log("ERR",err)
        }finally{
            
        }   
    }

    async function getCourseFromAPI(){
        setLoading(true)
         try{
             let response = await getCourseById(params.id)
             console.log("RESPONSE",response)
             setCourse(response);
             console.log("UpdateCourse courseFromAPI: ",course);
             setTitle(response.title);
             setDescription(response.description);
             setEstimatedTime(response.estimatedTime);
             setMaterialsNeeded(response.materialsNeeded);
         }catch(err){
             console.log("ERR",err)
         }finally{
             setLoading(false)
         }
     }

    // a React Hook used only inside functional component similar to componentDidMount - runs once
    useEffect(()=>{
        getCourseFromAPI();
    },[])

    return (
    <main>
    <div class="wrap">

        <h2>Update Course</h2>
        {/* while loading don't display the form */}
        {loading? "loading":  <form onSubmit={updateSingleCourse}>
            <div class="main--flex">
                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={e=>setTitle(e.target.value)}/>

                    <p>By Joe Smith</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea
                     id="courseDescription" 
                     name="courseDescription" 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                     ></textarea>
                </div>
                <div>
                    <label for="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime"
                     name="estimatedTime"
                     type="text" 
                     onChange={e=>setEstimatedTime(e.target.value)}
                    value={estimatedTime}
                    />

                    <label for="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={e=>setMaterialsNeeded(e.target.value)}></textarea>
                </div>
            </div>
            <button className="button" type="submit">Update Course</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button>
        </form>
    }
      
    </div>
</main>
)};

export default UpdateCourse;