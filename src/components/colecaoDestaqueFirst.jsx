import { Section } from "./section";
import { Button } from 'primereact/button';




export const ColecaoDestaqueFirst = () => {
    const colecao = [
        {
            url: '../../public/collection-1.png'
        },

        {
            url: '../../public/collection-2.png'
        },

        {
            url: '../../public/collection-3.png'
        },

    ]
    return (
        <Section title={'Coleções em Destaque'} titleAlign={''} link={''}>
            <div className="flex flex-row gap-3 mb-11">
                {colecao.map((col, index) => (
                    <div key={index} className="relative">
                        <img src={col.url} alt="" className="rounded-lg"/>
                        <div className="w-[96px] h-[32px] bg-[#E7FF86] text-sm font-bold text-dark-gray-2 rounded-full flex items-center justify-center absolute top-2 left-2">
                            <span>30% OFF</span>
                        </div>
                        <Button label="Comprar" className="absolute bg-light-gray-3 text-primary font-bold text-base items-center justify-center left-3 bottom-4 w-36 h-12 rounded-lg"/>

                    </div>
                ))}
            </div>

        </Section>
    );
}

