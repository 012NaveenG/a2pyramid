import { Outlet } from "react-router-dom"
import SidebarMenu from "../components/SidebarMenu.jsx"
import Navbar from "../components/Navbar.jsx"

const Layout = () => {
    return (
        <div className="flex dark:bg-slate-800 h-screen w-screen gap-2 p-2 overflow-y-auto">
            <SidebarMenu />
            <div className="w-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
