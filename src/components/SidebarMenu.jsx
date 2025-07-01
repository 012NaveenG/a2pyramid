import {
    Avatar,
    Sidebar as FlowSidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
} from "flowbite-react";

// react icons
import { MdDashboard } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { BsFillFilePostFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { PiExamBold } from "react-icons/pi";
import { MdOutlineFeed } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import {  useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../api/users";


const links = [
    { path: "/dashboard", label: "Dashboard", roles: ["admin", "teacher", "student"], icon: MdDashboard },
    { path: "/admin/my-classes", label: "Class Managements", roles: ["admin"], icon: SiGoogleclassroom },
    { path: "/timetable", label: "Schedule", roles: ["admin"], icon: RiCalendarScheduleFill },
    { path: "/admin/messages", label: "Messages", roles: ["admin"], icon: FiMessageSquare },
    { path: "/admin/library", label: "Digital Library", roles: ["admin"], icon: IoLibrary },
    { path: "/admin/bus-tracking", label: "Bus Live Tracking", roles: ["admin"], icon: FaBus },
    { path: "/my-posts", label: "My Posts", roles: ["admin"], icon: BsFillFilePostFill },

    { path: "/my-profile", label: "My Profile", roles: ["teacher"], icon: ImProfile },
    { path: "/my-classes", label: "My Classes", roles: ["teacher"], icon: SiGoogleclassroom },
    { path: "/class-timetable", label: "Schedule", roles: ["teacher"], icon: RiCalendarScheduleFill },
    { path: "/exams-and-lesson-planner", label: "Exams & Lesson Planner", roles: ["teacher"], icon: PiExamBold },
    { path: "/messages", label: "Messages", roles: ["teacher"], icon: FiMessageSquare },
    { path: "/library", label: "Digital Library", roles: ["teacher"], icon: IoLibrary },
    { path: "/bus-tracking", label: "Bus Live Tracking", roles: ["teacher"], icon: FaBus },

    { path: "/student/my-classes", label: "My Class", roles: ["student"], icon: SiGoogleclassroom },
    { path: "/messages", label: "Messages", roles: ["student"], icon: FiMessageSquare },
    { path: "/student/fee-status", label: "Fee Status", roles: ["student"], icon: MdOutlineFeed },
    { path: "/library", label: "Digital Library", roles: ["student"], icon: IoLibrary },
    { path: "/bus-tracking", label: "Bus Live Tracking", roles: ["student"], icon: FaBus }
];

const SidebarMenu = () => {
    const navigate = useNavigate();
    const user = getSession();

    const handleLogout = () => {
        clearSession();
        navigate("/");
    };

    return (
        <FlowSidebar aria-label="Smart school management sidebar">

            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem>
                        <h1 className="text-4xl font-semibold ">SMART</h1>
                        <div className="my-10 flex  gap-2">
                            <Avatar />
                            <div>
                                <h1 className="font-semibod text-lg text-white">{user.username}</h1>
                                <p className="font-thin text-green-400 text-xs">{user.role}</p>
                            </div>

                        </div>
                    </SidebarItem>
                </SidebarItemGroup>



                <SidebarItemGroup>
                    {links.filter(link => link.roles.includes(user?.role)).map((link, index) => (
                        <SidebarItem
                            key={index}
                            icon={link.icon}
                            onClick={() => navigate(link.path)}
                        >
                            {link.label}
                        </SidebarItem>
                    ))}
                </SidebarItemGroup>
                <SidebarItemGroup>

                    <SidebarItem icon={IoMdLogOut} onClick={handleLogout}>
                        Logout
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </FlowSidebar>
    );
};


export default SidebarMenu
