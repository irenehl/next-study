import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
    return(
        <div className="w-full bg-blue-400 flex justify-around py-5">
            <h1 className="font-bold w-1/2">Pagina</h1>
            <h3>Link 1</h3>
            <h3>Link 2</h3>
        </div>
    )
}

export default Navbar;