import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Menu from "./Menu";
import Search from "./Search";

export default function MobileSidebar() {
    return (
        <header className="lg:hidden h-14 text-2xl text-neutral-900/70 border-b border-neutral-400/20 bg-white justify-between items-center flex  w-full fixed top-0 z-50">
            <Menu>
                <div className="w-full flex flex-col gap-y-5 text-sm">
                    <Link to="/" className=" hover:border flex rounded-lg  py-1 mx-auto text-nowrap">Overflow Components</Link>
                    <a className=" hover:border flex rounded-lg px-20 py-1 mx-auto"  href="">Buttons</a>
                    <a className=" hover:border flex rounded-lg px-20 py-1 mx-auto"  href="">Menus</a>
                    <a className=" hover:border flex rounded-lg px-20 py-1 mx-auto"  href="">Cards</a>
                    <a className=" hover:border flex rounded-lg px-20 py-1 mx-auto"  href="">Acordeon</a>
                    <a className=" hover:border flex rounded-lg px-20 py-1 mx-auto"  href="">Github</a>
                </div>
            </Menu>

            <span className="flex items-center gap-x-2">
                <img className="h-8" src={logo} alt="" />
                <p className="text-lg font-semibold  font-sans">Gallery</p>
            </span>
            <Search />
        </header>
    )    
}