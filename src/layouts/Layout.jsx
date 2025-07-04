import { Outlet } from "react-router-dom"
import SidebarMenu from "../components/SidebarMenu.jsx"
import Navbar from "../components/Navbar.jsx"

const Layout = () => {
    return (
        <div className="flex dark:bg-slate-800 h-screen w-screen gap-2 p-2 ">
            <SidebarMenu />
            <div className="w-full h-full overflow-y-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
