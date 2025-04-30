import { BiPlus } from "react-icons/bi";
import ButtonFilter from "./ButtonFilter";

const NavBar = () => {

    return (
        <div className="w-full flex flex-col gap-y-4  text-sm text-neutral-700 pt-5  ">
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
        </div>
    );
}

export default NavBar;
