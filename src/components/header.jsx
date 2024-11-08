import React, { useState } from "react";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { LogoHeader } from "./logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-pink/theme.css"


//import logo from "../assets/logo-header.svg"
import minicart from "../assets/mini-cart.svg"

import { NavLink } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const input_search = () => {

        let procurar = document.getElementById('search');
        navigate('/produtos?filter=' + procurar.value);
    }

   const handleKeyDown = (event)=> {
       
       if (event.key === 'Enter') {
          event.preventDefault();
          input_search()
         
        }
    }
    return (
        <header className=" w-full h-48 top-0 bg-white">
            <div className="ml-24 mt-8 flex flex-col ">
                <div className="items-center flex flex-row ">
                    <Link to="/">
                        <LogoHeader  />
                    </Link>

                    <div>
                        <IconField className="w-[34.94rem] relative">
                            <InputIcon className="pi pi-search cursor-pointer " onClick={input_search} />
                            <InputText id="search" onKeyDown={handleKeyDown} placeholder="Pesquisar produto..." className="bg-light-gray-3 focus:shadow-[0_0_0_0.2rem_#C92071] w-full h-14 pl-4 ml-4 text-dark-gray-3 font-normal font-Inter text-base " />
                        </IconField>
                    </div>
                    <p className="underline font-Inter cursor-pointer text-dark-gray-2 text-base font-normal ml-10">
                        Cadastre-se
                    </p>
                    <Button label="Entrar" className="ml-10 bg-primary text-light-gray-3 font-Inter font-bold w-36 h-10 rounded-md" />
                    <img src={minicart} alt="cart" className="w-8 h-7 ml-16 cursor-pointer" />
                </div>
                <div className="mt-10">
                    <nav>
                        <ul className="flex flex-row gap-6 font-Inter font-normal text-base text-dark-gray-2">
                            <li className="">
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => isActive ? {
                                        color: '#C92071',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '4px',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="font-Inter font-normal">
                                <NavLink
                                    to="/produtos"
                                    style={({ isActive }) => isActive ? {
                                        color: '#C92071',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '4px',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Produtos
                                </NavLink>
                            </li>

                            <li className="font-Inter font-normal"><NavLink to="/categorias"
                                style={({ isActive }) => isActive ? {
                                    color: '#C92071',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                    fontWeight: 'bold'
                                } : {}}>Categorias
                            </NavLink>
                            </li>
                            <li className="font-Inter font-normal"><NavLink to="/myprodutos"
                                style={({ isActive }) => isActive ? {
                                    color: '#C92071',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                    fontWeight: 'bold'
                                } : {}}>Meus Produtos
                            </NavLink>
                            </li>

                        </ul>
                    </nav>

                </div>

            </div>

        </header>
    );
}

