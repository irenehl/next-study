import { FunctionComponent } from "react";
import { IBigHeroProps } from "../interfaces/interfaces";

const BigHero: FunctionComponent<IBigHeroProps> = ({ title, subtitle }) => {    
    return(
        <div className="w-full">
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
        </div>
    )
}

export default BigHero