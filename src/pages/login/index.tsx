import { FunctionComponent } from "react";
import BigHeroLayout from "../../layout/BigHeroLayout";

const Index: FunctionComponent = () => {
    return(
        <BigHeroLayout title="LoginPage" subtitle="Wenas">
            {/* Login Form */}
            
            <div className="bg-gray-400 w-full h-full flex flex-col items-center justify-center">
                <div className="w-1/3 flex justify-center space-between space-x-3 py-4">
                    <label htmlFor="">Usuario</label>
                    <input type="text" />
                </div>
                <div className="w-1/3 flex justify-center space-between space-x-3 py-4">
                    <label htmlFor="">Contrasena</label>
                    <input type="text" />
                </div>
                <button className="bg-blue-600 px-4 py-3 rounded-lg">Iniciar sesion</button>
            </div>
        </BigHeroLayout>
    )
}

export default Index;