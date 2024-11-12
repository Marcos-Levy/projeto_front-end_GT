import React, { useState } from "react";

const ProductDetails = (props) => {
    const [tamanho, setActiveTamanho] = useState(0)
    const [cor, setActiveCor] = useState(0)

    function HandleSetActiveTamanho(t) {
        setActiveTamanho(t);
    }
    function HandleSetActiveCor(c) {
        setActiveCor(c);
    }


    return (
        <>
            <div className="flex flex-col gap-4">
                {props.shape == 'square' && <div className="flex flex-col gap-3">
                    <div>
                        <span className="font-Inter font-bold text-sm text-light-gray">{props.title}</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        {props.options.map((size, index) => (
                            <div
                                key={index}
                                onClick={() => HandleSetActiveTamanho(size)}
                                className={`${tamanho === size ? 'bg-primary text-white' : 'bg-white'} select-none cursor-pointer font-bold text-base w-12 h-12 border-[1px] border-light-gray-2 text-center content-center`}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                }

                {props.shape == 'circle' && <div className="flex flex-col gap-3">
                    <div>
                        <span className="font-Inter font-bold text-sm text-light-gray">{props.title}</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        {props.options.map((i, index) => (
                            <div
                                key={index}
                                onClick={() => HandleSetActiveCor(i)}
                                className={`${cor === i ? 'border-primary border-[2px]' : 'border-none'} w-10 h-10 rounded-full cursor-pointer select-none flex items-center justify-center`}

                            >
                                <div
                                    className="w-8 h-8 rounded-full"
                                    style={{ backgroundColor: i }}
                                >

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                }

            </div>
        </>
    );
}

export default ProductDetails;