

import { Navbar, NavbarBrand } from "flowbite-react";

export default function Component() {
    return (
        <Navbar fluid rounded className="bg-slate-100 " >
            <NavbarBrand >
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">A2pyramid</span>
            </NavbarBrand>

        </Navbar>
    );
}
