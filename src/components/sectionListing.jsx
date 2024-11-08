import { Section } from "./section"
import { ProdutosCards } from "./productCard"
import { ListProdutos } from "../dados/dadosProdutos"

export const SectionList = ({colunas, title}) => {

    let lista = []

    for (let i = 0; i < 8; i++) {
        lista.push(ListProdutos[0])
    }

    return (
        <>
            <Section title={`${title}`} titleAlign={''} link={''}>
                <div className={`grid ${colunas} gap-4`}>
                    {lista.map((i, index) => (
                        <div key={index}>
                            <ProdutosCards nome={i.name} preco={i.price} href={i.image} tipo={i.type} />

                        </div>
                    ))}
                </div>
            </Section>

        </>
    );
}

