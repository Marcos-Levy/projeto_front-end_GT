import { Section } from "./section"
import { ProdutosCards } from "./productCard"
import { ListProdutos } from "../dados/dadosProdutos"
import { Link } from "react-router-dom"


export const SectionList = ({ colunas, title }) => {


    return (
        <>
            <Section title={`${title}`} titleAlign={''} link={''}>
                <div className={`grid ${colunas} gap-4`}>
                    {ListProdutos.map(i => (
                        <div key={i.id}>
                            <Link to={`/produtos/${i.id}`}>
                                <ProdutosCards nome={i.name} preco={i.price} href={i.image} tipo={i.type} precoDesconto={i.priceDiscount} />
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

        </>
    );
}

