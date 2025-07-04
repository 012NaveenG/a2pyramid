import {
    Avatar,
    Sidebar as FlowSidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
} from "flowbite-react";

// react icons
import { MdDashboard } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaBookOpen,FaChalkboardTeacher } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { BsFillFilePostFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { PiExamBold } from "react-icons/pi";
import { MdOutlineFeed } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../api/users";


const links = [
    { path: "/admin", label: "Dashboard", roles: ["admin"], icon: MdDashboard },
    { path: "/admin/my-classes", label: "Class Managements", roles: ["admin"], icon: FaChalkboardTeacher },
    { path: "/admin/timetable", label: "Schedule", roles: ["admin"], icon: RiCalendarScheduleFill },
    { path: "/admin/messages", label: "Messages", roles: ["admin"], icon: FiMessageSquare },
    { path: "/admin/library", label: "Digital Library", roles: ["admin"], icon: FaBookOpen },
    { path: "/admin/bus-tracking", label: "Bus Live Tracking", roles: ["admin"], icon: FaBus },
    { path: "/admin/my-posts", label: "My Posts", roles: ["admin"], icon: BsFillFilePostFill },

    
    { path: "/teacher", label: "Dashboard", roles: ["teacher"], icon: MdDashboard },
    { path: "/teacher/my-profile", label: "My Profile", roles: ["teacher"], icon: ImProfile },
    { path: "/teacher/my-classes", label: "My Classes", roles: ["teacher"], icon: FaChalkboardTeacher },
    { path: "/teacher/class-timetable", label: "Schedule", roles: ["teacher"], icon: RiCalendarScheduleFill },
    { path: "/teacher/exams-and-lesson-planner", label: "Exams & Lesson Planner", roles: ["teacher"], icon: PiExamBold },
    { path: "/teacher/messages", label: "Messages", roles: ["teacher"], icon: FiMessageSquare },
    { path: "/teacher/library", label: "Digital Library", roles: ["teacher"], icon: FaBookOpen },
    { path: "/teacher/bus-tracking", label: "Bus Live Tracking", roles: ["teacher"], icon: FaBus },

    { path: "/student", label: "Dashboard", roles: ["student"], icon: MdDashboard },
    { path: "/student/my-classes", label: "My Class", roles: ["student"], icon: FaChalkboardTeacher },
    { path: "/student/messages", label: "Messages", roles: ["student"], icon: FiMessageSquare },
    { path: "/student/fee-status", label: "Fee Status", roles: ["student"], icon: MdOutlineFeed },
    { path: "/student/library", label: "Digital Library", roles: ["student"], icon: FaBookOpen },
    { path: "/student/bus-tracking", label: "Bus Live Tracking", roles: ["student"], icon: FaBus }
];

const SidebarMenu = () => {
    const navigate = useNavigate();
    const user = getSession();

    const handleLogout = () => {
        clearSession();
        navigate("/");
    };

    return (
        <FlowSidebar aria-label="Smart school management sidebar ">

            <SidebarItems >
                <SidebarItemGroup>
                    <SidebarItem>
                        <h1 className="text-4xl font-semibold ">SMART</h1>
                        <div className="my-10 flex  gap-2">
                            <Avatar />
                            <div>
                                <h1 className="font-semibod text-lg dark:text-white">{user.username}</h1>
                                <p className="font-thin text-green-400 text-xs">{user.role}</p>
                            </div>

                        </div>
                    </SidebarItem>
                </SidebarItemGroup>

                <SidebarItemGroup>
                    {links.filter(link => link.roles.includes(user?.role)).map((link, index) => (
                        <NavLink
                            to={link.path}
                            key={index}
                            end={link.path === "/admin" || link.path === "/teacher" || link.path === "/student"} // sirf dashboard link pe end prop lagega
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'dark:text-gray-200 hover:bg-blue-700'}`
                            }
                        >
                            <link.icon className="mr-2" />
                            {link.label}
                        </NavLink>
                    ))}
                </SidebarItemGroup>
                <SidebarItemGroup>

                    <SidebarItem className="cursor-pointer" icon={IoMdLogOut} onClick={handleLogout}>
                        Logout
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </FlowSidebar>
    );
};


export default SidebarMenu
