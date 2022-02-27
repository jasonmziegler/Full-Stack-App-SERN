//From React Authentication Course https://teamtreehouse.com/library/react-authentication/implementing-basic-authentication/set-up-user-registration
// the Data class holds the methods you will use to create, sign up and autheticate user.
import config from './config';
const axios = require('axios');
 
export default class Data {
   url = config.apiBaseUrl;
    api(path, method = 'GET', body = null) {
      const url = config.apiBaseUrl + path;
      
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
  
      if (body !== null) {
        options.body = JSON.stringify(body);
      }
  
      return fetch(url, options);
    }
  
    async getUser() {
      const response = await this.api(`/users`, 'GET', null);
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 401) {
        return null;
      }
      else {
        throw new Error();
      }
    }
    
    async createUser(user) {
      const response = await this.api('/users', 'POST', user);
      if (response.status === 201) {
        return [];
      }
      else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors;
        });
      }
      else {
        throw new Error();
      }
    }

    // This function will create a course
    async createCourse(payload) {
        try{
          const response = await axios.post(`${this.url}/courses`,payload);
          return response;
          
        }catch(err){
          console.log("err",err);
        }
    }

    async getCourseById(courseId) {
      try {
        console.log("GetCourseById CourseId", courseId);
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        console.log("getCourseById ResponseData: ",response.data);
        return response.data;

      } catch(err) {
        console.log("err",)
      }
    }
    //payload is the data coming from the UI 
    async updateCourse(payload) {
      const { title,
        description,
        courseId,
        estimatedTime,
        materialsNeeded,
        userId,
      } = payload;
      console.log("PAYLOAD",payload);
      try{
        const response = await axios.put(`http://localhost:5000/api/courses/${courseId}`,{
              title,
              description,
              estimatedTime,
              materialsNeeded,
              //TODO: get user from authentication (user is required to create the course)
              userId,
        });
        return response.data
        
      }catch(err){
        console.log("err",err.response);
      }
    }

    async getCourses() {
        //code example from Axios docs
        // title, description, materialsNeeded , estimatedTime,userId
        try {
            const response = await axios.get('http://localhost:5000/api/courses');
            //console.log(response.data);
            return response.data;
        } catch (error) {
          console.error(error);
        }
        

        // OLD FUnction trying to use this.api
        // let courses = await axios.get('http://localhost:5000/api/courses').catch(err => {console.log(err)});
        // if (courses.status === 200) {
        //     console.log("getCourses Response: ",courses.data.data);
        // return courses;
        // const response = await this.api('/courses')
        // if (response.status === 200) {
        //     console.log(response)
        //     // return response.data.data;
        // } else {
        //     return "Error no courses found.";
        // }        
    }
    async deleteCourse(courseId) {
      //Delete a course
      //
      try {
        console.log("Delete CourseId", courseId);
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        console.log("getCourseById ResponseData: ",response.data);
        return response.data;

      } catch(err) {
        console.log("err",)
      }

    }
  }
  