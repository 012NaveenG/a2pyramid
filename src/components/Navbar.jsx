import { Navbar, NavbarBrand } from "flowbite-react";

export default function Component() {
    return (
        <Navbar fluid rounded className="bg-slate-100 fixed top-0 w-full z-50 shadow">
            <NavbarBrand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">A2pyramid</span>
            </NavbarBrand>
        </Navbar>
    );
}
