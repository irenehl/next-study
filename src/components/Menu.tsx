import { FunctionComponent } from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IMenuProps } from "../types/IMenuProps";

const Menu: FunctionComponent<IMenuProps> = ({ show }) => {
    return (
        <div className={`transition-all duration-500 fixed top-0 left-0 bg-cyan bg-opacity-80 ${show ? "h-full w-full" : "h-0 w-0"}`}>
            <nav className={`w-1/3 h-screen fixed transition-all duration-500 overflow-hidden md:w-1/4 lg:w-1/5 xl:w-1/6 ${show ? "w-full md:w-2/5 lg:w-1/6" : "w-0"}`}>
                <ul className={`w-full flex flex-col h-screen justify-end items-center list-none pt-10 ${show ? "opacity-100" : "opacity-0"}`}>
                    <li className="w-full h-16 flex items-center justify-center nav-item mb-auto">
                        <a href="#" className="space-x-3 flex justify-center items-center w-full nav-icon">
                            <Icon className="transition-all duration-300 text-4xl" icon={faHome}/>
                            <span className="text-white hidden md:block xl:text-lg xl:font-semibold">Home</span>
                        </a>
                    </li>
                    <li className="w-full h-16 flex items-center justify-center nav-item">
                        <a href="#" className="space-x-3 flex justify-center items-center w-full nav-icon">
                            <Icon className="transition-all duration-300 text-4xl" icon={faLinkedin}/>
                            <span className="text-white hidden md:block xl:text-lg xl:font-semibold">LinkedIn</span>
                        </a>
                    </li>
                    <li className="w-full h-16 flex items-center justify-center nav-item">
                        <a href="#" className="space-x-3 flex justify-center items-center w-full nav-icon">
                            <Icon className="transition-all duration-300 text-4xl" icon={faInstagram}/>
                            <span className="text-white hidden md:block xl:text-lg xl:font-semibold">Instagram</span>
                        </a>
                    </li>
                    <li className="w-full h-16 flex items-center justify-center nav-item">
                        <a href="#" className="space-x-3 flex justify-center items-center w-full nav-icon">
                            <Icon className="transition-all duration-300 text-4xl" icon={faGithub}/>
                            <span className="text-white hidden md:block xl:text-lg xl:font-semibold">GitHub</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;