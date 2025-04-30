import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";


const ButtonFilter = ({title,filter}) => {
  const navigate = useNavigate();

  
  const {setComponentsFiltered,componentsFiltered,isLoading,allComponents} = useContext(SearchContext)
  
  
  const styleClass= "w-11/12 hover:bg-sky-200/50 hover:text-sky-600 justify-between flex rounded-lg ps-4 py-3 ms-2 "
  
  const onFilter =()=>{
    if(filter){
      
      setComponentsFiltered(allComponents.filter((component) => component.tech.toLowerCase().includes(filter.toLowerCase())))
    }
    else{
      setComponentsFiltered(allComponents)
    }
    navigate(`/`);
  } 

    return(
        <button
              className={styleClass}
              onClick={()=>{onFilter()}}
            >
              {title}
              <IoIosArrowForward className="mr-4" />
            </button>
          );
    
};

export default ButtonFilter;
