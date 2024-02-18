import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments 
import { IoEyeOffOutline } from "react-icons/io5";


function CourseNavigation() 
{
    const links = ["Home", "Modules" ,  "Piazza" , "ZoomMeetings", "Assignments", "Grades"  ];
    const links_eye = [ "Discussions" , "Announcmenets", "Pages",
    "Files" , "Rubrics"];
    
    
const { pathname } = useLocation();
return (
  <ul className="list-group wd-course-navigation" style={{ width: 150 }}>
    {links.map((link, index) => (
      <li key={index}>
        <Link to={link} className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link} 
            </Link>
</li>
))}
{links_eye.map((link, index) => (
      <li key={index}>
        <Link to={link} className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link} <IoEyeOffOutline style={{color:"black"}} />
            </Link>
</li>
))}
 </ul>
); }
export default CourseNavigation;
