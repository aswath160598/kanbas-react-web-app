import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoReorderThreeOutline } from "react-icons/io5";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === courseId);



    const createBreadcrumb = () => {
        const path = pathname.split("/");

        return decodeURI(path[path.length - 1]);

    };

    return (
        <div className="wd-courses w-100">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />


            <div className=" d-none d-md-block">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"> <IoReorderThreeOutline className="wd-icon" /> <span className="red-color">CS5610 Spring 2024</span></li>
                        <li className="breadcrumb-item active">{createBreadcrumb()}</li>
                    </ol>
                </nav>
            </div>
            
            <div className="glasses-icon">
                <button type="button" className="btn btn-light">
                <i className="fas fa-glasses"></i>
                &nbsp;Student View
                </button>

                </div>

            <hr className="w-100" />
            <p>Course {course?.name}</p>
            <div className = "d-flex flex-row">
            <CourseNavigation />
                    <div>
                    <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "150px" }} >
                    <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            {/* <Route path="Assignments" element={<Assignments/>} /> */}
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<Grades />} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="PanoptoVideo" element={<h1>PanoptoVideo</h1>} />
                            <Route path="ZoomMeetings" element={<h1>ZoomMeetings</h1>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        </Routes>
                    </div>
                    </div>
            </div>

        </div>

    );
}
export default Courses;