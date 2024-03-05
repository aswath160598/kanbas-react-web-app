import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";

function AssignmentEditor() {
  const { Num_assign } = useParams();
  const assignment = db.assignments.find(
(assignment) => assignment._id === Num_assign); 
const {  courseId } = useParams();

const navigate = useNavigate();
const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
        <div className="col-11">
                        <div className="top-buttons5">
                                <div className="wd-title">
                                
                                    <div className="float-end" style={{ width: "200px",marginTop:"10px" }} >

                                        <i className="fas fa-check-circle" style={{ maxWidth: "7px",marginRight:"10px",color:"#0daf7e"}} ></i>
                                        <button type="button" className="published-button">
                                            Published
                                        </button>
                                                        
                                        <button type="button" className="btn btn-light ms-2 title-button">
                                            <i className="fa-solid fa-ellipsis-vertical" ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>


        <div>
            <h4 style={{marginTop:"0px"}}>Assignment Name</h4>
            <input value={assignment?.title}
                    className="form-control mb-2" style={{marginTop:"40px"}}/>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger ms-2 float-end">
                Save
            </Link>
            <button onClick={handleSave} className="btn btn-light ms-2 float-end">
                Cancel
            </button>
            
            <hr style={{marginTop:"60px"}}/>
      
        </div>
    </div>
    </div>
    

); }
export default AssignmentEditor;