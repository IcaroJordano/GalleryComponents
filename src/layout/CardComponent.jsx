import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function CardComponent({ to,image, title }) {
    return (
        <Link to={`/component/${to}`} className=" h-58 lg:w-56 lg:h-56 hover:shadow-xl transition-all duration-700 border rounded-lg border-neutral-200">
            <h3 className=" border-b py-2 items-center font-semibold ps-4 text-neutral-700 text-sm lg:text-xs flex border-neutral-200">
                <div className="flex gap-1 mr-3">
                    <div className="rounded-full w-2 h-2 bg-red-400/85" ></div>
                    <div className="rounded-full w-2 h-2 bg-green-500/85" ></div>
                    <div className="rounded-full w-2 h-2 bg-amber-300/85" ></div>
                </div>
                {title ? title : '...'}</h3>

            <img className={`duration-900 animate-bounce h-24 w-11/12  my-11  mx-auto object-contain  ${image ? "grayscale-0" : 'grayscale-100 opacity-50'}`} src={image || logo} alt="" />
        </Link>
    )
}