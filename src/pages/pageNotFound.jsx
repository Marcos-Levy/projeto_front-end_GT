import logo404 from "../../public/nao-encontrado.png"
import { LogoHeader } from "../components/logo";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";


export const PageNotFound = () => {
    return (
        <>
        <div className="flex flex-row justify-center items-center gap-40 py-32 bg-rose-100 w-screen h-screen ">
            <div className="max-w-96 flex flex-col gap-4">
                <LogoHeader/>
                <h1 className="font-Inter font-bold text-dark-gray-2">Parece que não conseguimos encontrar a página que você estava procurando!</h1>
                <Link to="/" className="w-52 h-10" >
                <Button label="Ir para a página Inicial" className=" bg-primary text-light-gray-3 font-Inter font-bold w-full h-full rounded-md"/>
                </Link>
                
            </div>
            <div className=" flex flex-col items-center text-center">
                <img src={logo404} alt="" className="w-52 h-52"/>
                <span className="text-primary font-bold text-xl">
                    Oops! Esta página não pode ser encontrada!
                </span>
            </div>


            
        </div>
        </>
    );
}