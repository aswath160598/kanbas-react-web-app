import { courses, assignments } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa";


function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === courseId);

  const var_navigation = pathname.split("/");
  const second_level_var = var_navigation[4];
  let assignment = "";
  let Num_assign = "";

  if (
    var_navigation[2] === "Courses" &&
    second_level_var === "Assignments" &&
    var_navigation.length === 6
  ) {
    Num_assign = var_navigation[5];

    const assignmentList = assignments.filter(
      (assignment) => assignment.course === courseId
    );
    assignment =
      assignmentList.find((assignment) => assignment._id === var_navigation[5])
        ?.title ?? "";
  }

    return (
        <div className="wd-courses-main w-100">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css" rel="stylesheet" />
     <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />

        <div className="col-11 ps-0 ms-0">
          <div className="mt-3">
            <nav aria-label="breadcrumb">
                <div className="row">
                <div className="col-10 p-0">
                    <div className="breadcrumb-container">
                    <ol className="breadcrumb">
                        
                        <Link
                        to={`/Kanbas/Courses/${courseId}/Home`}
                        className="breadcrumb-item mt-3 ">
                            &nbsp;&nbsp;<FaBars />
                            &nbsp;&nbsp;{course?.name}
                        </Link>

                        <Link
                        to={`/Kanbas/Courses/${courseId}/${second_level_var}`}
                        className={`breadcrumb-item mt-3  ${
                            var_navigation.length === 5 ? "active" : "wd-red-color"}`}>
                        {second_level_var}
                        </Link>

                        {var_navigation[2] === "Courses" &&
                        second_level_var === "Assignments" &&
                        var_navigation.length === 6 && (
                            <Link
                            to={`/Kanbas/Courses/${courseId}/${second_level_var}/${Num_assign}`}
                            className="breadcrumb-item mt-3  active">
                            {assignment}
                            </Link>
                        )}
                    </ol>
                    </div>
                </div>
                <div className="col-2 p-0">
                    <button className="btn btn-light float-end m-2">
                    <i className="fas fa-glasses"></i>
                    &nbsp;Student View
                    </button>
                </div>
                
                </div>
            </nav>
        </div>
        </div>

            <hr className="w-100" />
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
                            <Route path="Assignments/:Num_assign" element={<AssignmentEditor/>}/>
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