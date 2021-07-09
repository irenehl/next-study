import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import { IBigHeroProps } from "../interfaces/interfaces";
import BigHero from "../components/Bighero";

const BigHeroLayout: FunctionComponent<IBigHeroProps> = ({title, subtitle, children}) => {
    return (
        <>
            <Navbar />
            <BigHero title={title} subtitle={subtitle} />
            { children }
        </>
    )
}

export default BigHeroLayout;