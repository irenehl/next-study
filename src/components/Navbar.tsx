import { FunctionComponent } from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar: FunctionComponent = () => {
    return (
        <nav className="w-1/2 h-screen fixed transition-all">
            <ul className="flex flex-col h-screen justify-end items-center list-none">
                <li className="w-full h-16 flex items-center justify-center">
                    <a href="#" className="space-x-3 flex justify-center items-center">
                        <Icon className="transition-all duration-300 nav-icon text-5xl" icon={faHome}/>
                        <span className="text-white hidden">Home</span>
                    </a>
                </li>
                <li className="w-full h-16 flex items-center justify-center">
                    <a href="#" className="space-x-3 flex justify-center items-center">
                        <Icon className="transition-all duration-300 nav-icon text-5xl" icon={faLinkedin}/>
                        <span className="text-white hidden">LinkedIn</span>
                    </a>
                </li>
                <li className="w-full h-16 flex items-center justify-center">
                    <a href="#" className="space-x-3 flex justify-center items-center">
                        <Icon className="transition-all duration-300 nav-icon text-5xl" icon={faInstagram}/>
                        <span className="text-white hidden">Instagram</span>
                    </a>
                </li>
                <li className="w-full h-16 flex items-center justify-center">
                    <a href="#" className="space-x-3 flex justify-center items-center">
                        <Icon className="transition-all duration-300 nav-icon text-5xl" icon={faGithub}/>
                        <span className="text-white hidden">GitHub</span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;