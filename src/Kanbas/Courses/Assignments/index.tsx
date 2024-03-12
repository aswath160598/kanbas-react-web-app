import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { KanbasState } from "../../store";
import { useSelector , useDispatch} from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import "./index1.css";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";




function Assignments() {
  const { courseId } = useParams();
  const [Assign_Chosen_ID, Boolean_Assign_Chosen_ID] = useState(null);
  const [Assign_Chosen_Title, Boolean_Assign_Chosen_Title] = useState("");
  const [display, flag_display] = useState(false);

const activateModal = (course_ID_Value: React.SetStateAction<null>, course_Title_Value: React.SetStateAction<string>) => {
    flag_display(true);
    Boolean_Assign_Chosen_ID(course_ID_Value);
    Boolean_Assign_Chosen_Title(course_Title_Value);
};
const dispatch = useDispatch();
const courseAssignments = useSelector((state: KanbasState) =>
state.assignmentsReducer.assignments).filter(
    (assignment : { course: string }) => assignment.course === courseId);
    const dismissModal = () => {
        flag_display(false);
    }
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
                            <div className="top-buttons-className">
                                <div className="wd-title-className">
                                    <div className="input-group float-start  mb-3 mr-5 w-25" >
                                        <input type="text" className="form-control" placeholder="Search for Assignment" aria-label="Search for Assignment"></input>
                                    </div>
                                    <div className="float-end" >

                                        <button type="button" className="btn btn-light ms-3">
                                            <i className="fa-solid fa-plus"></i>
                                            Group
                                        </button>
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}>
                                        <button type="button" className="btn btn-danger ms-2">
                                            <i className="fa-solid fa-plus"></i>
                                            Assignment
                                        </button>
                                        </Link>
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
                                            {courseAssignments.map((assignment) => (
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
                                                        <AiFillDelete className="fs-4" onClick={() => activateModal(assignment._id, assignment.title)} />
                                                    </div>
                                                </div>
                                            </div>
                                            </li>))}
                                        </ul> 
                                    </ul>
                                    <Modal show={display} onHide={dismissModal}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Assignment Deletion Confirmation
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete the Assignment :  
                    <b> 
                        {Assign_Chosen_Title}
                    </b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" onClick={dismissModal}>
                        Close Dialog
                    </Button>
                    <Button className="btn btn-danger" onClick={() => {
                        dismissModal();
                        dispatch(deleteAssignment(Assign_Chosen_ID));
                    }}>
                        Confirm Deletion
                    </Button>
                </Modal.Footer>
            </Modal>
                </div>
            </div>
    </>
);}
export default Assignments;

