import { Button } from 'primereact/button';
import tenisOferta from '../../public/Laye.svg'

export const OfertaEspecial = () => {
    return (
        <>
            <div className="max-w-full h-[553px] flex flex-row pl-5 pt-20">
                <div className='h-[466px] w-[466px] relative ml-20'>
                    <div className='bg-gradient-to-r from-[#4200FF40] from-25% rotate-90 rounded-full w-full h-full'>

                    </div>
                    <div className='absolute top-8 -left-16 w-[573px]'>
                        <img src={tenisOferta} alt="" />
                    </div>

                </div>
                <div className='ml-[150px] flex flex-col items-start gap-5'>
                    <span className='text-sm font-bold text-primary'>
                        Oferta Especial
                    </span>
                    <h2 className='font-bold text-5xl text-dark-gray-2'>
                        Air Jordan edição de <br />colecionador
                    </h2>
                    <p className='max-w-md font-normal text-base text-dark-gray-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

                    <Button label='Ver Oferta' className='w-[200px] h-[40px] bg-primary rounded-lg font-bold text-sm text-light-gray-3'/>
                </div>
            </div>
        </>
    );
}
