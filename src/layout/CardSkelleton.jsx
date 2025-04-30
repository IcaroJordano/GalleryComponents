import logo from '../assets/logo.png'


export default function CardSkelleton() {
    return (
        <div  className=" h-58 lg:w-56 w-full lg:h-56 hover:shadow-xl transition-all duration-700 border rounded-lg border-neutral-200">
            <h3 className=" border-b py-2 items-center font-semibold ps-4 text-neutral-700 text-sm lg:text-xs flex border-neutral-200">
                <div className="flex gap-1 mr-3">
                    <div className="rounded-full w-2 h-2 bg-neutral-400" ></div>
                    <div className="rounded-full w-2 h-2 bg-neutral-400" ></div>
                    <div className="rounded-full w-2 h-2 bg-neutral-400" ></div>
                </div>
                {'...'}</h3>

            <img className={`duration-2000 animate-bounce h-24 w-11/12  my-11  mx-auto object-contain  grayscale-100 opacity-50`} src={logo} alt="" />
        </div>
    )
}