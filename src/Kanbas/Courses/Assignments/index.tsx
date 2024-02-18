import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index1.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
                            <div className="top-buttons-class">
                                <div className="wd-title-class">
                                    <div className="input-group float-start  mb-3 mr-5 w-25" >
                                        <input type="text" className="form-control" placeholder="Search for Assignment" aria-label="Search for Assignment"></input>
                                    </div>
                                    <div className="float-end" >

                                        <button type="button" className="btn btn-light ms-3">
                                            <i className="fa-solid fa-plus"></i>
                                            Group
                                        </button>
                                        <button type="button" className="btn btn-danger ms-2">
                                            <i className="fa-solid fa-plus"></i>
                                            Assignment
                                        </button>
                                        <button type="button" className="btn btn-light ms-3">
                                            <i className="fa-solid fa-ellipsis-vertical" ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

    <div className="main_content-assign flex-wrap">
                                
                                <div className="main_content-1">
                                <hr/>
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-secondary" >
                                            <i className="fas fa-grip-vertical"  style={{ marginRight: "10px" }}></i>
                                            Assignments
                                            <div className="float-end">
                                                <button className="badge rounded-pill text-dark border-0 badge-lg" style={{ marginRight: "10px" }}>40% of Total</button>
                                                <div className="float-end">
                                                <i className="fas fa-plus" style={{ marginRight: "10px" }}></i>
                                                <i className="fa-solid fa-ellipsis-vertical"  style={{ marginRight: "10px" }}></i>
                                            </div>
                                            </div>
                                        </li>
                                        <ul className="list-group">
                                            {assignmentList.map((assignment) => (
                                            <li className="list-group-item border-design" > 
                                                <div className="row">
                                                <div className="col-1 mt-4">
                                                    <i className="fa fa-grip-vertical" style={{ marginRight: "10px" }}></i>
                                                    <i className="fa-solid fa-file-pen" style={{ color:"#0daf7e"}}></i>
                                                </div>
                                                <div className="col-10">
                                                <Link
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                                    <p>Week 0 - SETUP - Week starting on Monday, September 5th (9/5/2022) Module |<br/>
                                                    <b>Due</b> Sept 18, 2022 at 11:59 pm | 100 pts</p>
                                                </div>
                                                <div className="col-1 col-auto">
                                                    <div className="float-end">
                                                        <i className="fas fa-check-circle" style={{ marginRight: "10px",marginTop:"15px",color:"#0daf7e" }}></i>
                                                        <i className="fa-solid fa-ellipsis-vertical" ></i>
                                                    </div>
                                                </div>
                                            </div>
                                            </li>))}
                                        </ul> 
                                    </ul>
                                </div>
            </div>
    </>
);}
export default Assignments;