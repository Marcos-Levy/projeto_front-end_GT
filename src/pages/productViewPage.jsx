import { Link, useParams } from "react-router-dom";
import React from "react";
import { ListProdutos } from "../dados/dadosProdutos";
import { ProdutosCards } from "../components/productCard";
import { Gallery } from "../components/galerry";
import BuyBox from "../components/buyBox";
import { SectionList } from "../components/sectionListing";
import { Section } from "../components/section";



export const ProductView = () => {

    const { id } = useParams();
    const idQuery = parseInt(id, 10);

    const product = ListProdutos.find((product) => product.id === idQuery);

    const contentLink =
    {
        "text": "Show More",
        "href": "/produtos"
    }


    return (
        <>
            <div className="px-20 flex flex-col bg-[#F9F8FE] py-5">
                <div className="mb-10 font-medium font-Inter text-sm text-dark-gray-2 flex flex-row gap-3">
                    <Link to="/" className="font-bold">Home </Link>
                    <span>/</span>
                    <Link to="/produtos">Produtos </Link>
                    <span>/</span>
                    <span> {product.type} </span>
                    <span>/</span>
                    <span> {product.marca} </span>
                    <span>/</span>
                    <span>{product.name} </span>
                </div>
                <div className="flex flex-row gap-8 mb-16">
                    <Gallery thumb={product} showThumbs />
                    <BuyBox descricao={product} />
                </div>

                <Section title={'Produtos em Alta'} titleAlign='' link={contentLink}>
                    <SectionList colunas={'grid-cols-4'} title={''} />
                </Section>
            </div>


        </>
    );
}

