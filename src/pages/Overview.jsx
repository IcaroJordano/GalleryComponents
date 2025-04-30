import CardComponent from "../layout/CardComponent";
import imagem from '../assets/input.png'
import axios from "axios";

import { useContext, useState } from "react";
import { useEffect } from "react";
import CardSkelleton from "../layout/CardSkelleton";
import { SearchContext } from "../context/SearchContext";


export function Overview() {


    const {componentsFiltered,isLoading} = useContext(SearchContext)


    return (
        <section className="w-9/12 mx-auto min-h-screen mt-20 lg:mt-8">
            <h2 className="text-3xl lg:text-4xl  mt-8 font-bold text-neutral-800">Components Overview </h2>
            <p className="text-sm lg:w-9/12 lg:text-base text-neutral-500 font-sans my-8"  >Esta galeria apresenta todos os componentes desenvolvidos para projetos web, organizados de forma prática e visual. Cada componente foi pensado para ser reutilizável, responsivo e alinhado às boas práticas de design e desenvolvimento frontend.</p>
            <h2 className="flex text-2xl items-center text-neutral-700" >General <div className="border rounded-md text-center  ms-2 border-neutral-400 flex items-center justify-center  text-sm w-5 lg:w-6 h-5 lg:h-6">{componentsFiltered.length}</div></h2>
            <div className="flex flex-col lg:flex-row gap-8 my-5 flex-wrap">
                {!isLoading && componentsFiltered.map((component) => (
                    <CardComponent to={component.id} image={component.preview?.url} title={component.title} />
                    
                ))}
                {isLoading && (
                    <div className="flex gap-8 flex-wrap">
                        <CardSkelleton/>
                        <CardSkelleton/>     
                        <CardSkelleton/>     
                        <CardSkelleton/>     
                        <CardSkelleton/>     
                        <CardSkelleton/>     
                        <CardSkelleton/>     
                        <CardSkelleton/></div>)}

            </div>
        </section>
    )
}