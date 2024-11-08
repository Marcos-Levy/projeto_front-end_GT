import { Gallery } from "../components/galerry";
import { ColecaoDestaqueFirst } from "../components/colecaoDestaqueFirst";
import { ColecaoDestaqueSecond } from "../components/colecaoDestaqueSecond";
import { SectionList } from "../components/sectionListing";
import { OfertaEspecial } from "../components/ofertaEspecial";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



export const HomePage = () => {
    const images = [
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },

    ];

    

    return (
        <>
            <Gallery imagens={images} />
            <div className="w-full bg-[#F9F8FE] px-20">
                <ColecaoDestaqueFirst />
                <ColecaoDestaqueSecond />
                <SectionList colunas={'grid-cols-4'} title={'Produtos em Alta'} />
                
            </div>
            <OfertaEspecial />
        </>
    );
}

