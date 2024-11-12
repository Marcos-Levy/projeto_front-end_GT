import { Link } from "react-router-dom"
import 'primeicons/primeicons.css';

export const Section = ({ title, titleAlign, link, children }) => {

    let alignText = ''
    let visLink = ''

    if (link === "") {
        visLink = 'hidden'
        if (titleAlign == 'center') {
            alignText = 'justify-center'
        } else {
            alignText = 'justify-start'
        }
    } else {
        alignText = 'justify-between'
    }


    return (
        <div className="flex flex-col gap-5 font-Inter items-center mb-10">
            <div className={`flex w-full ${alignText}`} >

                <span className="text-dark-gray-2 text-2xl font-bold" >
                    {title}
                </span>

                <span className={`text-primary text-lg z-10 ${visLink}`}>
                    <Link to={link.href} className="flex items-center justify-center gap-2">
                        {link.text}
                        <i class="pi pi-arrow-circle-right"/>
                    </Link>
                </span>

            </div>

            <div>
                {children}
            </div>
        </div>
    );
}

