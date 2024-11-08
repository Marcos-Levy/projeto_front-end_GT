import { Section } from "./section";

export const ColecaoDestaqueSecond = () => {

    const colecao = [
        {
            url: '../../src/assets/camisa.svg',
            text: 'Camisetas'
        },
        {
            url: '../../src/assets/calca.svg',
            text: 'Calças'
        },
        {
            url: '../../src/assets/calca.svg',
            text: 'Bonés'
        },
        {
            url: '../../src/assets/fone.svg',
            text: 'Headphones'
        },
        {
            url: '../../src/assets/tenis.svg',
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
                                        <img src={col.url} alt="" />
                                    </div>
                                    <div>
                                        <span>
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
