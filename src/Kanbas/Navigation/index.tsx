import { Link, useLocation } from "react-router-dom";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa"
import { FiClock } from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./index.css";
function KanbasNavigation() {

    const links = [
            { label: "Account",   icon: <BiSolidUserCircle className="fs-2" />  },
            { label: "Dashboard", icon: <RiDashboard3Fill className="fs-2" />  },
            { label: "Courses",   icon: <FaBookOpen className="fs-2" />           },
            { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
            { label: "Inbox",     icon: <FaInbox className="fs-2" />          },
            { label: "History",   icon: <FiClock className="fs-2" />          },
            { label: "Studio",    icon: <FaNetworkWired className="fs-2" />   },
            { label: "Commons",   icon: <BsBoxArrowInRight className="fs-2" />  },
            { label: "Help",      icon: <AiFillQuestionCircle className="fs-2" /> },
          ];
    const { pathname } = useLocation();
    return (
        <ul className="list-group  widget-nav"style={{ width: 100 }}>
            <img className="university-image" src="/images/Logo_NEU.png" />
          {links.map((link, index) => (
            <li key={index} >
              <Link key={index} to={`/Kanbas/${link.label}`} className={`list-group-item ${link.label} ${pathname.includes(link.label) && "active"}`}> 
              <div className="icon">
                {link.icon}
                </div>
                {link.label} 
              </Link>
    </li>
    ))} 
    </ul>
    );
    }

export default KanbasNavigation;

