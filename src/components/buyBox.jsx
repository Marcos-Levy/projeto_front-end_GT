import stars1 from "../assets/Star 01.svg"
import stars2 from "../assets/Star 02.svg"
import star from "../assets/star-icon.svg"
import ProductDetails from "./productOption"
import { Button } from "primereact/button"

const BuyBox = (props) => {


    const convStar = parseInt(props.descricao.stars)
    const listStars = []
    for (var i = 0; i < convStar; i++) {
        listStars.push(stars1)
    }
    for (var j = 0; j < (5 - convStar); j++) {
        listStars.push(stars2)
    }






    return (
        <>

            <div className="w-[440px] flex flex-col">

                <div className="mb-2">
                    <span className="font-bold font-Inter text-4xl">
                        {props.descricao.type} {props.descricao.marca} {props.descricao.name}
                    </span>
                </div>
                <div className="mb-2">
                    <span className="font-Inter font-medium text-xs text-dark-gray-3">
                        {props.descricao.tipo} | {props.descricao.marca} | REF:{props.descricao.ref}
                    </span>
                </div>
                <div className="flex flex-row gap-4 items-center mb-5">
                    <div className="flex felx-row gap-1">
                        {listStars.map((star, index) => (
                            <span key={index}>
                                <img src={star} alt="" />
                            </span>
                        ))}
                    </div>
                    <div className="w-16 h-6 bg-warning rounded-lg flex flex-row items-center justify-center font-Inter font-black text-sm text-white gap-1">
                        <span>{props.descricao.stars}</span>
                        <img src={star} alt="" className="" />
                    </div>
                    <span className="font-Inter font-medium text-sm text-light-gray">
                        ({props.descricao.avaliacoes} avaliações)
                    </span>

                </div>
                <div className="flex flex-row items-baseline gap-2 mb-5">
                    <div className="flex flex-row items-baseline gap-1">
                        <span className="font-Inter font-normal text-lg text-dark-gray-2">R$</span>
                        <span className="font-Inter font-bold text-4xl text-dark-gray-2">{props.descricao.price}</span>
                    </div>
                    <s className=" font-Inter font-normal text-lg text-light-gray-2">{props.descricao.priceDiscount}</s>
                </div>
                <div className="flex flex-col gap-1 mb-5">
                    <span className="font-Inter font-bold text-sm text-light-gray">
                        Descrição do produto
                    </span>
                    <span className="font-Inter font-medium text-sm text-dark-gray-2">
                        {props.descricao.descricao}
                    </span>
                </div>

                <div className="mb-5">
                    <ProductDetails title={"Tamanhos"} options={props.descricao.tamanhos} shape={'square'} className="mb-4" />
                </div>
                <div className="mb-5">
                    <ProductDetails title={"Cores"} options={props.descricao.cores} shape={'circle'} />
                </div>

                <Button label="COMPRAR" className="bg-warning focus:outline-none focus:ring-2 focus:ring-primary text-light-gray-3 font-Inter font-bold text-base w-56 h-12 rounded-xl" />


            </div>
        </>
    );
}

export default BuyBox;