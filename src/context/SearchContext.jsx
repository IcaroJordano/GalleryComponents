import axios from "axios";
import { useState,createContext, useEffect } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({children})=>{
    const [allComponents,setAllComponents]=useState([])
    const [componentsFiltered,setComponentsFiltered]=useState([])
    const [searchValue,setSearchValue]=useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onChangeSearch=(valor)=>{
        setSearchValue(valor)
    }



    useEffect(() => {
      setComponentsFiltered(allComponents.filter((component) => component.title.toLowerCase().includes(searchValue.toLowerCase())))

    },[searchValue])


    useEffect(() => {
        setIsLoading(true)
        axios.post(
            'https://graphql.datocms.com/',
            {
                query: `{
                  allComponents {
                    id
                    tech
                    title
                    preview {
                        url
                    }
                    }    
                }`
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Icaro Jordano bb386ce340209bdcdb721c9cfda244`,
                }
            }
        )
            .then((res) => {
                setAllComponents(res.data.data['allComponents'])
                setComponentsFiltered(res.data.data['allComponents'])
                console.log(res.data.data['allComponents'])
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=> {
                setTimeout(()=> {

                    setIsLoading(false)
                },[1000])
            })
    }, [])

    return(
        <SearchContext.Provider value={{isLoading,componentsFiltered,setComponentsFiltered,searchValue,onChangeSearch,setSearchValue,allComponents,setAllComponents }}>
            {children}
        </SearchContext.Provider>
    )
}