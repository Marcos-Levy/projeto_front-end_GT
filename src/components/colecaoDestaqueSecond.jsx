import { Section } from "./section";
import React from "react";
//import { ReactComponent as Icon } from '../assets/camisa.svg';
import { MdOutlineHeadphones } from "react-icons/md";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPantsLight } from "react-icons/pi";
import { PiBaseballCap } from "react-icons/pi";
import { PiSneaker } from "react-icons/pi";

export const ColecaoDestaqueSecond = () => {

    const colecao = [
        {
            url: LiaTshirtSolid,
            text: 'Camisetas'
        },
        {
            url: PiPantsLight,
            text: 'Calças'
        },
        {
            url: PiBaseballCap,
            text: 'Bonés'
        },
        {
            url:  MdOutlineHeadphones ,
            text: 'Headphones'
        },
        {
            url: PiSneaker,
            text: 'Tênis'
        },
    ]

    const contentLink =
    {
        "text": "Show More",
        "href": "/produtos"
    }


    return (
        <>
            
                
                    <Section title={'Coleção em Destaque'} titleAlign='center' link={contentLink}>
                        <div className="w-[712px] h-[128px] flex flex-row justify-between mt-3 ">
                            {colecao.map((col, index) => (
                                <div key={index} className="w-[104px] h-[138px] flex flex-col text-center">
                                    <div className="w-[104px] h-[104px] flex items-center justify-center">
                                        
                                        {<col.url className="hover:text-primary text-6xl text-[#8F8F8F] cursor-pointer"/>}
                                                             
                                    </div>
                                    <div>
                                        <span className="font-Inter font-bold text-sm text-dark-gray-2">
                                            {col.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                      
                    </Section>
                
            
        </>
    );
}
