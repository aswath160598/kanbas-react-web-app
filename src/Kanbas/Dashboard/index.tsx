import  React  from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import {FaFilePen} from "react-icons/fa6";
import  { useState } from "react";

interface CourseType {
  _id: string;
  name: string;
  number: string;
  startDate: string; // Assuming date is handled as a string, format: 'YYYY-MM-DD'
  endDate: string;   // Assuming date is handled as a string, format: 'YYYY-MM-DD'
  image: string;     // Assuming this is a path to an image or a URL
}
interface DashboardProps {
  courses: CourseType[]; // Replace `CourseType` with the actual data type you use for courses
  course: CourseType; // Replace `CourseType` with the actual data type
  setCourse: React.Dispatch<React.SetStateAction<CourseType>>;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}
function Dashboard( { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardProps) {
  




    return (
        <div className="p-4">
          <h1>Dashboard</h1>              <hr />
          

          <h2>Published Courses (12)</h2> <hr />

          <div className="list-group mb-4">
    <div className="list-group-item">
       
       
        <button onClick={updateCourse} className="btn btn-primary float-end ms-2 mb-2">
            Update
        </button>
        <button onClick={addNewCourse} className="btn btn-success float-end ms-2 mb-2">
            Add
        </button>
        <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

      
    </div>
    </div>

          <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course) => (
                <div key={course._id} className="col" style={{ width: 300 }}>
                  
                  <div className="card">
                    <img src={`/images/${course.image}`} className="card-img-top"
                         style={{ height: 150 }}/>
                    
                    <div className="card-body">
                      <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name} </Link>
                        
                    <div>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}
                            className="btn btn-warning float-end ms-2">
                            Edit
                        </button>
                      </div>
                      
                      <p className="card-text">
                        {course.name}
                        <br />
                        2154137_1 Spring 2024 Semester Full Term
                        </p>
                        <FaFilePen className="wd-icon" />
                    </div>
                  </div>
                </div>
    ))} </div>
          </div>
        </div>
    ); }
    export default Dashboard;


