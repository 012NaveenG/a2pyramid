import { Navbar as FlowNavbar, NavbarBrand } from "flowbite-react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
    return (
        <FlowNavbar fluid rounded className="bg-slate-100 fixed top-0 w-full z-50 shadow">
            <div className="flex items-center gap-4">
                
                {/* Sidebar Toggle Button for Mobile */}
                <button className="md:hidden text-xl" onClick={toggleSidebar}>
                    <FaBars className="font-semibold dark:text-white text-xl" />
                </button>

                <NavbarBrand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">A2pyramid</span>
                </NavbarBrand>
            </div>
        </FlowNavbar>
    );
};

export default Navbar;
