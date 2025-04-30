import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";


const ButtonFilter = ({title,filter}) => {
  const navigate = useNavigate();

  
  const {setComponentsFiltered,setIdFilter,componentsFiltered,isLoading,allComponents} = useContext(SearchContext)
  
  
  const styleClass= "w-11/12 hover:bg-sky-200/50 hover:text-sky-600  justify-center lg:justify-between  flex rounded-lg ps-4 py-3 ms-2 "
  
  const onFilter =()=>{
    if(filter){
      
      setComponentsFiltered(allComponents.filter((component) => component.tech.toLowerCase().includes(filter.toLowerCase())))
      setIdFilter(filter)
    }
    else{
      setIdFilter('General')
      setComponentsFiltered(allComponents)
    }
    navigate(`/GalleryComponents`);
  } 

    return(
        <button
              className={styleClass}
              onClick={()=>{onFilter()}}
            >
              {title}
              <IoIosArrowForward className={`mr-4 lg:flex hidden` } />
            </button>
          );
    
};

export default ButtonFilter;
