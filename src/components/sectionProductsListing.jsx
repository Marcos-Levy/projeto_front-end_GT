import { useState } from "react";
import { FilterGroup } from "./filterGroup";
import { SectionList } from "./sectionListing";
import { Section } from "./section";


export const ProductsList = ({rep}) => {
    const [selectedValue, setSelectedValue] = useState('');

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    const filtersMarca = [
        [
            { "text": "Adiddas" },
            { "text": "Calenciaga" },
            { "text": "K-Swiss" },
            { "text": "Nike" },
            { "text": "Puma" }
        ],
        [
            { "text": "Esporte e Lazer" },
            { "text": "Casual" },
            { "text": "Utilitário" },
            { "text": "Corrida" }

        ],
        [
            { "text": "Masculino" },
            { "text": "Feminino" },
            { "text": "Unisex" }


        ],
        [
            { "text": "Novo", "values":"NEW", "group": "status"},
            { "text": "Usado", "values":"USED", "group": "status" }
        ]
    ]

    return (
        <>
            <div className="px-20 flex flex-col ">
                <div className="flex flex-row justify-between my-2 items-center">
                    <div >
                        <span className="font-bold font-Inter text-base text-dark-gray-2">Resultados para "Tênis" -</span> <span className="font-Inter text-dark-gray-2 text-sm font-normal">389 produtos</span>

                    </div>
                    <div>
                        <select id="filter" value={selectedValue} onChange={handleChange} className="w-[308px] h-16 border-2 py-2 px-2" autoFocus >
                            <option disabled className="text-dark-gray-2 text-base">Ordenar por - </option>
                            <option value="Menor preco" className="text-dark-gray-2">Menor preço</option>
                            <option value="Mais relevantes" className="text-dark-gray-2" >Mais relevantes</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-row my-2">
                    <div className="bg-white w-[308px] py-7">
                        <div>
                            <span className="font-bold font-Inter text-base text-dark-gray-2">Filtrar por</span>
                            <hr className="my-5 w-52 h-[2px] bg-light-gray-2" />
                        </div>

                        <div className="mb-5">
                            <FilterGroup options={filtersMarca[0]} title={'Marka'} inputType={'checkbox'} />
                        </div>
                        <div className="mb-5">
                            <FilterGroup options={filtersMarca[1]} title={'Categoria'} inputType={'checkbox'} />
                        </div>
                        <div className="mb-5">
                            <FilterGroup options={filtersMarca[2]} title={'Gênero'} inputType={'checkbox'} />
                        </div>
                        <div className="mb-5">
                            <FilterGroup options={filtersMarca[3]} title={'Estado'} inputType={'radio'} />
                        </div>
                    </div>
                    <Section title={''} link={''} titleAlign={''} >
                        <SectionList colunas={'grid-cols-3'} title={''}/>
                    </Section>

                </div>
            </div>
        </>
    );
}

