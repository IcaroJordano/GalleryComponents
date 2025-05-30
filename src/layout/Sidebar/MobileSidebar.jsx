import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import Search from "./Search";
import ButtonFilter from "./ButtonFilter";
import { BiPlus } from "react-icons/bi";
import NavBar from "./NavBar";

export default function MobileSidebar() {
  return (
    <header className="lg:hidden h-14 text-2xl text-neutral-900/70 border-b border-neutral-400/20 bg-white justify-between items-center flex  w-full fixed top-0 z-50">
      <Menu>
        {/* <div className="w-full flex flex-col gap-y-4  text-sm text-neutral-700 pt-5  ">
          <ButtonFilter title={"Overview"} />
          <ButtonFilter title={"Tailwind"} filter={"Tailwind"} />
          <ButtonFilter title={"Bootstrap"} filter={"Bootstrap"} />
          <a
            className="w-11/12 hover:bg-sky-200/50 hover:text-sky-600  justify-center :justify-between  flex rounded-lg ps-4 py-3 ms-2 "
            href="https://github.com/IcaroJordano"
            target="_blank"
          >
            GitHub
            <BiPlus className="mr-4 lg:flex hidden" />
          </a>
          <a
            className="w-11/12 hover:bg-amber-200/50 hover:text-amber-600  justify-center :justify-between  flex rounded-lg ps-4 py-3 ms-2 "
            href="https://gallery-components.admin.datocms.com/editor/item_types/XrNbZlxPQN-Xa3bu49Z45Q/items"
            target="_blank"
          >
            Adicionar
            <BiPlus className="mr-4 lg:flex hidden" />
          </a>
        </div> */}
        <NavBar/>
      </Menu>

      <span className="flex items-center gap-x-2">
        <img className="h-8" src={logo} alt="" />
        <p className="text-lg font-semibold  font-sans">Gallery</p>
      </span>
      <Search />
    </header>
  );
}
