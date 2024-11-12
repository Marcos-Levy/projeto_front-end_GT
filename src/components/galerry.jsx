import React, { useState, useEffect } from 'react';
import ornamento from "../../public/Ornament.svg";
import { Button } from 'primereact/button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';


export const Gallery = (props) => {
    const bgColors = [
        "bg-bgproduto1",
        "bg-bgproduto2",
        "bg-bgproduto3",
        "bg-bgproduto4",
        "bg-bgproduto5",
    ];
    const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <>
            {!props.showThumbs && <div className='h-[42.563rem] font-Inter bg-light-gray-3'>

                <Swiper
                    style={{
                        '--swiper-navigation-color': '#C92071',
                        '--swiper-pagination-color': '#C92071',
                    }}
                    className='w-full'
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    pagination={{ clickable: true }}
                >

                    {props.imagens.map((itens, index) => (
                        <SwiperSlide className='pl-[100px] pt-[50px]' key={index}>
                            <div className='mb-20'>
                                <div className='flex flex-row relative'>
                                    <div className='flex flex-col gap-6'>
                                        <span className='font-bold text-base text-warning'>
                                            Melhores ofertas personalizadas
                                        </span>
                                        <h1 className='font-extrabold text-[4rem] tracking-[0.063rem] max-w-[33rem] text-dark-gray leading-[4.125rem]'>
                                            Queima de stoque Nike 🔥
                                        </h1>
                                        <p className='mb-6 font-normal text-lg leading-7 tracking-[0.047rem] max-w-[30rem] text-dark-gray-2'>
                                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                                        </p>
                                        <Button label="Ver Oferta" className='w-56 h-12 rounded-md bg-primary text-light-gray-3 font-bold text-base' />


                                    </div>
                                    <div className='float-right h-[27rem] w-[46rem] relative top-[-100px] right-[90px]'>
                                        <img src={itens.image} alt="" className='' />
                                    </div>
                                    <div className='absolute top-0 right-6'>
                                        <img src={ornamento} alt="" />
                                    </div>
                                </div>


                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>

            }


            {props.showThumbs && <div className="w-[700px] flex flex-col gap-2 mb-7">
                <div className='w-full'>
                    <Swiper
                         style={{
                            '--swiper-navigation-color': '#C92071',
                            '--swiper-pagination-color': '#C92071',
                        }}

                        modules={[FreeMode, Navigation, Thumbs, Pagination]}
                        spaceBetween={10}
                        navigation={true}
                        //pagination={{ clickable: true }}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    //className="mySwiper2"
                    >
                        {bgColors.map((cor, index) => (
                            <SwiperSlide key={index} className={`${cor} w-full h-[570px] rounded-lg flex items-center justify-center`}>
                                <img src={props.thumb.image} alt="" />
                            </SwiperSlide>


                        ))
                        }

                    </Swiper>
                </div>
                <div className='w-[700px]'>
                    <Swiper
                        modules={[FreeMode, Navigation, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                    //className="mySwiper"
                    >

                        {bgColors.map((cor, index) => (
                            <SwiperSlide
                                key={index}
                                className={`${cor} cursor-pointer rounded-md overflow-hidden border-2 ${activeIndex === index ? 'border-primary' : 'border-transparent'
                                    }`}
                            >

                                <img src={props.thumb.image} alt="" />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </div>
            }

        </>
    );
}

