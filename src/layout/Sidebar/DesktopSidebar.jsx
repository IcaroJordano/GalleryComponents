import logo from "../../assets/logo.png";
import { BiPlus, BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import ButtonFilter from "./ButtonFilter";

export default function DesktopSidebar() {
  const {onChangeSearch} = useContext(SearchContext);


  return (
    <div className="w-2/12 h-auto  hidden lg:flex flex-col bg-neutral-50">
      <img className="h-28 mx-auto my-4  " src={logo} alt="" />
      <div
        className={`w-11/12 mx-auto  items-center    my-4 h-9 flex   transition-all duration-500     border border-neutral-900/20  rounded-xl py-1 ps-4`}
      >
        <BiSearch className="text-neutral-800 mr-1" />
        <input
          onChange={(e)=>{onChangeSearch(e.target.value)}}
          className="w-11/12 outline-none ring-0 text-neutral-800 text-sm"
          placeholder="Pesquise p/ titulo"
          type="text"
        />
      </div>

      <div className="w-full flex flex-col gap-y-4  text-sm text-neutral-700 pt-5  ">
        <ButtonFilter title={"Overview"}  />
        <ButtonFilter title={"Tailwind"} filter={"Tailwind"} />
        <ButtonFilter title={"Bootstrap"} filter={"Bootstrap"} />
        <a
          className="w-11/12 hover:bg-sky-200/50 hover:text-sky-600 justify-between flex rounded-lg ps-4 py-3 ms-2 "
          href="https://github.com/IcaroJordano"
          target="_blank"
        >
          GitHub
          <BiPlus className="mr-4" />
        </a>
        <a
          className="w-11/12 hover:bg-amber-200/50 hover:text-amber-600 justify-between flex rounded-lg ps-4 py-3 ms-2 "
          href="https://gallery-components.admin.datocms.com/editor/item_types/XrNbZlxPQN-Xa3bu49Z45Q/items"
          target="_blank"
        >
          Adicionar
          <BiPlus className="mr-4" />
        </a>
      </div>
    </div>
  );
}
