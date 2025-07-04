import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu.jsx";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex h-screen w-screen overflow-hidden dark:bg-slate-800">

            {/* Sidebar */}
            <div className={`fixed z-40 h-full transition-transform bg-slate-900 text-white ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block`}>
                <SidebarMenu toggleSidebar={() => setShowSidebar(false)} />
            </div>

            {/* Overlay for mobile when sidebar open */}
            {showSidebar && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setShowSidebar(false)}></div>
            )}

            {/* Main Content */}
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
                <div className="flex-1 overflow-y-auto p-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
