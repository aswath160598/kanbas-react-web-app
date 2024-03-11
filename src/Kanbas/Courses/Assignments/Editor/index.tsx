import { KanbasState } from "../../../store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { addAssignment, setAssignment, updateAssignment, initialState } from "../assignmentsReducer";




function AssignmentEditor() {

const { Num_assign } = useParams();

const {  courseId } = useParams();

const navigate = useNavigate();

const dispatch = useDispatch();


  const assignment = useSelector(
    (state: KanbasState) =>
  state.assignmentsReducer.assignment);


const courseAssignments = useSelector(
    (state: KanbasState) =>
    state.assignmentsReducer.assignments);

const Button_Save = () => {
    const existingAssignment = courseAssignments.find(
      (a) => a._id === assignment._id
    );

    if (existingAssignment) 
    {
      dispatch(updateAssignment(
        { ...assignment }
        ));
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } 
    else 
    {
      dispatch(addAssignment(
        { ...assignment, course: courseId }
        ));
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }
}


const old_course = initialState.assignment


useEffect(() => 
{
    if (Num_assign !== "NewAssignment") 
    {
        const Assign_update = 
        courseAssignments.find
        (assignment => assignment._id === Num_assign);
        if (Assign_update) 
        {
            dispatch(setAssignment(Assign_update));
        }
    } 
    else 
    {
        dispatch(setAssignment(old_course));
    }
}, 
[Num_assign, courseAssignments, dispatch]
);



  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
    <div className="main-assignment-content">
                                <div className="edit-assignment-section">
                                    <hr/>
                                    <div className="mb-4">
                                        <h2 className="form-label text-right">
                                            Assignment Name
                                        </h2>
                                        <input
        type="text"
        className="form-control mb-3"
        id="assign1"
        name="assign1"
        value={assignment?.title ?? "Name of the New Assignment"}
        onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
                                    </div>
                                    <div className="mb-4">
                                    <textarea className="form-control mb-3" onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, description: e.target.value }))
                    }
                        value={assignment?.description} >
        {assignment
          ? "This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify."
          : "New Assignment Description"}
      </textarea>
                                    </div>
                                  <div className="my-div-cute-div" style={{marginRight:"180px"}}>
                                    <div className="mb-4">
                                        <div className="row">
                                            <div className="col text-end">
                                                <label htmlFor=" text-insert" className="form-label">Points</label>
                                            </div>
                                            <div className="col">
                                                <input type="number" className="form-control" id=" text-insert" value={assignment?.points} onChange={(e) =>
                                    dispatch(setAssignment({ ...assignment, points: e.target.value }))
                                } />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="row">
                                            <div className="col text-end">
                                                <label htmlFor=" text-insert" className="form-label">
                                                    Assignment Group
                                                </label>
                                            </div>
                                            <div className="col">
                                                <select className="form-select">
                                                    <option selected>
                                                        ASSIGNMENT
                                                    </option>
                                                    <option value="Assignment Group 1">
                                                        Assignment Group 1
                                                    </option>
                                                    <option value="Assignment Group 2">
                                                        Assignment Group 2
                                                    </option>
                                                    <option value="Assignment Group 3">
                                                        Assignment Group 3
                                                    </option>
                                                 </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="row">
                                            <div className="col text-end">
                                                <label htmlFor=" text-insert" className="form-label">
                                                    Display Grade
                                                </label>
                                            </div>
                                            <div className="col">
                                                <select className="form-select">
                                                    <option selected>
                                                        Percentage
                                                    </option>
                                                    <option value="Number">
                                                        Number
                                                    </option>
                                                    <option value="Alphabet">
                                                        Alphabet
                                                    </option>
                                                    <option value="CGPA">
                                                        CGPA
                                                    </option>
                                                 </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="row">
                                            <div className="col">
    
                                            </div>
                                            <div className="col">
                                        <input className="form-check-input" type="checkbox" value="" id="r7"/>
                                        <label className="form-check-label" htmlFor="r6">
                                        Do not count this assignment towards the final grade
                                    </label>
                                      </div>
                                    </div>

                                <div className="row mb-3">
                                    <div className="row">
                                        <div className="col text-end">
                                            Assign
                                        </div>
                                        <div className="col-6 box_custom">
                                            <div className="containter border p-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="form-label" htmlFor="text-fields-assign"><b>Assign to</b></label><br />
                                                        <input className="form-control" id="text-fields-assign" value="Everyone" />
                                                        <br />
                                                    </div>
                                                    <div >
                                                        <label className="form-label" htmlFor="due"><b>
                                                            Due
                                                        </b></label> <br />
                                                        <input type="date" id="due" value="2023-09-06"/> <br /> <br />
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="form-label" htmlFor="due"><b>Available from:</b></label><br />
                                                        <input type="date" id="due" value="2023-09-23"/> <br /> <br />
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="form-label" htmlFor="due"><b>Until</b></label> <br />
                                                        <input type="date" id="due"/> <br /> <br />
                                                    </div>
                                                    <div  >
                                                        <i className="fa-solid fa-plus" ></i>
                                                      <span>Add</span>
                                                    </div>
                                                </div>
                                            </div>
            
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>  
                                <hr/>
                                <div className="mb-4">
                                        <div className="row">
                                            <div className="col">
                                        <input className="form-check-input" type="checkbox" value="" id="r7"/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Notify users that the content has been changed</label>
                                      </div>

                                      <div>
            <input value={assignment?.title}
                    className="form-control mb-2" style={{marginTop:"40px"}}/>
            <button onClick={Button_Save}
            className="btn btn-danger float-end">
            Save
          </button>
            
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                         className="btn btn-light ms-2 float-end">
                        Cancel
                    </Link>


            <hr style={{marginTop:"60px"}}/>
      
        </div>
    </div>
    <hr/>
    </div>
    </div>
    </div>
    </div>
    

); }
export default AssignmentEditor;

