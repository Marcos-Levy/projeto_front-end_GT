export const ProdutosCards = (props) => {
    return (
        <>
            <div className="w-[292px] h-[439px] flex flex-col relative rounded-lg">
                <div className="w-[292px] h-[321px] flex justify-center items-center bg-white">
                    <img src={props.href} alt="" className="w-full h-full" />
                    <div className="w-[96px] h-[32px] bg-[#E7FF86] text-sm font-bold text-dark-gray-2 rounded-full flex items-center justify-center absolute top-5 left-5">
                        <span>30% OFF</span>
                    </div>
                </div>

                <div className=" flex flex-col gap-1">
                    <span className="text-light-gray font-bold text-xs">{props.tipo}</span>
                    <span className="text-dark-gray-2 font-normal text-2xl">{props.nome}</span>
                    <div className="flex flex-row gap-2">

                        <span className="text-light-gray font-normal text-2xl"><s>$300</s></span>
                        <span className="text-dark-gray font-bold text-2xl">${props.preco}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

