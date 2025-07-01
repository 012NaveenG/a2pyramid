import { Outlet } from "react-router-dom"
import SidebarMenu from "../components/SidebarMenu.jsx"

const Layout = () => {
    return (
        <div className="flex bg-slate-800 h-screen w-screen gap-2 p-2">
            <SidebarMenu />
            <Outlet/>
        </div>
    )
}

export default Layout
