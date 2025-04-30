import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import logo from '../assets/logo.png'
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function CardExample({ image,code }) {
    const [isCopy, setIsCopy] = useState(false);
    
    const copyCode = () => {
        const textToCopy = code?code:''; // Substitua por seu código real
    
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopy(true);
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    }

    useEffect(() => {
        if (isCopy) {
            const timer = setTimeout(() => {
                setIsCopy(false);
            }, 3000);
            return () => clearTimeout(timer); // Limpar o timer quando o componente for desmontado
        }
    }, [isCopy]);

    return (
        <div className="border border-neutral-200 rounded-xl lg:w-[351px]">
            <div className={`lg:w-96 w-80 bg-green-300 animate-bounce flex items-center rounded-md ${isCopy ? 'h-12' : 'h-0'} duration-300 transition-all fixed top-5 z-50 left:5 lg:left-96 text-white`}>
                <p className={`items-center ${isCopy ? 'flex' : 'hidden'}`}>
                    <BiCheck className="p-0.5 text-xl rounded-full mx-2 bg-white text-green-700" /> Texto copiado com sucesso
                </p>
            </div>
            <div className="bg-neutral-100 w-full rounded-t-xl h-7 flex items-center">
                <div className="flex gap-2 ps-5">
                    <div className="rounded-full w-3 h-3 bg-red-400/85"></div>
                    <div className="rounded-full w-3 h-3 bg-green-500/85"></div>
                    <div className="rounded-full w-3 h-3 bg-amber-300/85"></div>
                </div>
                <div className="bg-white w-9/12 h-4 mx-2 rounded-sm"></div>
            </div>
            <img className={`h-28 w-8/12 my-11 mx-auto object-contain ${image ? "grayscale-0" : 'grayscale-100 opacity-50'}`} src={image || logo} alt="" />
            <div className="flex h-8 items-center border-t border-neutral-200 justify-center">
                <div className="flex items-center mx-auto gap-x-4 text-neutral-500">
                    <a href="">
                        <FaGithub />
                    </a>
                    <a href="">
                        <FaCode />
                    </a>
                    <button className="cursor-pointer" onClick={copyCode}>
                        <MdContentCopy />
                    </button>
                    <a href="">
                        <FaExternalLinkAlt className="text-xs" />
                    </a>
                </div>
            </div>
        </div>
    );
}
