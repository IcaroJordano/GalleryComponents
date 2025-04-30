import { useParams } from "react-router-dom"
import { BsPencilSquare } from "react-icons/bs";
import CardExample from "../layout/CardExample";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function ComponentDetails() {
    const { id } = useParams()
    const [component, setComponent] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.post(     
            'https://graphql.datocms.com/',
            {
                query: `{
                  component(filter:{id:{eq:${id}}}) {
    id
    title
    code
    import
    description
    imgex1 {
      url
    }
      imgex2 {
      url
    }
      imgex3 {
      url
    }
    
    
  }  
                }`} 
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Icaro Jordano bb386ce340209bdcdb721c9cfda244`,
                }
            }
        )
            .then((res) => {
                setComponent(res.data.data['component'])
                console.log(res.data.data['component'])
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setTimeout(() => {

                    setIsLoading(false)
                }, [1000])
            })
    }, [])



    return (
        <section className="w-full mx-auto  lg:flex">
            <div className="w-10/12  mx-auto lg:w-8/12 mt-20 lg:ms-8">
                <h2 className="font-semibold overflow-hidden flex items-center text-neutral-900 font-sans text-3xl " >{component.title} <BsPencilSquare className="ms-2 text-xl text-neutral-500 mt-2" /> </h2>
                <p className="text-sm text-neutral-500 my-4 lg:w-11/12">{component.description}</p>

                {component.import && 
                <p className="bg-red-50 p-1 w-11/12 text-neutral-500 rounded-sm text-sm">{component.import}</p>
                
                }

                <h3 className="text-lg my-4">Examples</h3>
                <div className="my-4 flex flex-col lg:flex-row gap-4 flex-wrap">
                    {component.imgex1 &&  
                    <CardExample image={component.imgex1.url} code={component.code} />
                    }
{component.imgex2 &&  
                    <CardExample code={component.code} />
                    }{component.imgex3 &&  
                        <CardExample code={component.code} />
                        }
                </div>
            </div>
            <section className=" lg:w-4/12 inline-block min-h-screen  w-full  p-2 bg-gray-800 ">
                <pre className="bg-gray-900 w-[405px] lg:w-[365px] inline-block    text-white p-4 lg:p-6 lg:rounded-lg overflow-x-auto text-xs">
                    <code className="">
                        {`${component.code?component.code:component.title}`}

                    </code>
                </pre>
            </section>

        </section>
    )
}