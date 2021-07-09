import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";

const Layout: FunctionComponent = ({children}) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}

export default Layout;