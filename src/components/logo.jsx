import logoHeader from "../assets/logo-header.svg"
import logoFooter from "../assets/logo-footer.svg"


export const LogoHeader = () => {
    return ( 
        <img src={logoHeader} alt="logo do cabeçalho" className="w-60 h-11" />
     );
}

export const LogoFooter = () => {
    return(
        <img src={logoFooter} alt="logo do rodapé" />
    )

}
 
