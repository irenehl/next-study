import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars, faCross } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu";

const Navbar: FunctionComponent = () => {
    const [ showNavbar, setShowNavbar ] = useState(false)

    return (
        <div className="w-full h-16 flex justify-end items-center pr-8">
            <Icon className="text-2xl" icon={ showNavbar ? faCross : faBars }/>
            <Menu show={ !showNavbar }></Menu>
        </div>
    )
}

export default Navbar;