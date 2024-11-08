import { LogoFooter } from "./logo";
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import { Info } from "./informacoes";

export const Footer = () => {

const inform = [  {
    "text": "Sobre Drip Store",
    "link": "/about"
  },
  {
    "text": "Segurança",
    "link": "/seguranca"
  },
  {
    "text": "Wishlist",
    "link": "/wishlist"
  },
  {
    "text": "Blog",
    "link": "/blog"
  },
  {
    "text": "Trabalhe Conosco",
    "link": "/trabalhe_conosco"
  },
  {
    "text": "Meus Pedidos",
    "link": "/pedidos"
  },
];
const categ = [  {
    "text": "Camisetas",
    "link": "/camisetas"
  },
  {
    "text": "Calças",
    "link": "/calcas"
  },
  {
    "text": "Bonés",
    "link": "/bones"
  },
  {
    "text": "Headphones",
    "link": "/headphones"
  },
  {
    "text": "Tênis",
    "link": "/tenis"
  },
];
const contact = [  {
    "text": "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    "link": "/#"
  },
  {
    "text": "(85) 3051-3411",
    "link": "/#"
  },
  
];



    return (
        <>
            <footer className="bg-dark-gray w-full text-white font-Inter font-normal text-base ">
                <div className="mt-[72px] mx-[104px] flex flex-col">
                    <div className=" flex flex-row justify-between">
                        <div className=" flex flex-col gap-8 mr-28 ">
                            <div>
                                <LogoFooter />
                            </div>
                            <div className="max-w-72">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore.</p>
                            </div>
                            <div className="flex flex-row gap-8">
                                <a href="https://www.instagram.com/" target="_blanc"><img src={instagram} alt="instagram" className="hover:scale-125"/></a>
                                <a href="https://x.com/" target="_blanc"><img src={twitter} alt="twitter" className="hover:scale-125"/></a>
                                <a href="https://www.facebook.com/" target="_blanc"><img src={facebook} alt="facebook" className="hover:scale-125"/></a>
                            </div>
                        </div>
                         
                          <Info title="Informações" info={inform} className="hover:text-primary"/>
                          <Info title="Categorias" info={categ} className="hover:text-primary"/>
                          <Info title="Contatos" info={contact} className="cursor-default pointer-events-none"/>
                          
                    </div>
                    <hr className="w-full h-0.5 opacity-30 mt-8" />
                </div>
                <div className="flex flex-col items-center my-4">
                    
                    <span className="text-sm">© 2024 Digital College</span>
                </div>

            </footer>
        </>
    );
}

