import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const PageLayout = () => {
    return ( 
        <div className="flex flex-col relative">
            <Header />
                <Outlet/>
            <Footer />
        </div>
     );
}
 
