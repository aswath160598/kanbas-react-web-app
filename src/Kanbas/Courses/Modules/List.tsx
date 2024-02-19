import React, { useState } from "react";
import "./index_list.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  console.log(modulesList)
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  
  return (
<>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
      {/* <!-- Add buttons here --> */}
            <div className="d-flex">
                <div className="top-b123">
                            <div className="wd-title12" style={{marginRight:"30px"}}>
                                <div className="d-flex float-end" style={{width:"600px"}}>
                                    <button type="button" className="btn btn-light btn-primary ms-3" style={{width:"400px"}}>
                                        Collapse All
                                    </button>
                                    <button type="button" className="btn btn-light btn-primary ms-3" style={{width:"400px"}}>
                                        View Progress
                                    </button>
                                    <button type="button" className="btn btn-light btn-primary ms-3" style={{width:"400px"}}>
                                            <i className="fas fa-check-circle" style={{color: "#0daf7e",marginRight:"10px"}}></i>
                                            Publish All
                                    </button>
                                    <button type="button" className="btn btn-danger ms-3" style={{width:"400px"}}>
                                        <i className="fas fa-plus" style={{marginRight:"10px"}}></i>
                                        Module
                                    </button>
                                    <button type="button" className="btn btn-light ms-3">
                                        <i className="fa-solid fa-ellipsis-vertical"  ></i>
                                    </button>
                                </div>
                            </div>
                        </div>

            </div>
            <hr />
      <ul className="list-group wd-modules12" style={{maxWidth:"1150px"}}>
      
        {modulesList.map((module) => (
          <li
            className="list-group-item" 
            onClick={() => setSelectedModule(module)} style={{marginRight: "12px", backgroundColor:"#EAEDED",marginBottom:"30px"}}>
            <div>
            <i className="fa fa-grip-vertical" style ={{color:"gray",marginRight:"12px"}}></i>

           {selectedModule._id === module._id ? <FaCaretDown className="me-2" /> : <FaCaretRight className="me-2" />}
                                {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success-circles"  />
                <FaCaretDown />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <RxDragHandleDots2 />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success-circles"/>
                      <FaEllipsisV className="ms-2" />
                    </span>
                    </li>
            ))} </ul>
        )} </li>
        ))} </ul>
        </>
); 
}
export default ModuleList;







