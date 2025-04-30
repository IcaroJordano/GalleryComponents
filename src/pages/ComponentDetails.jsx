import { useParams } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import CardExample from "../layout/CardExample";
import CardSkelleton from "../layout/CardSkelleton";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BiX } from "react-icons/bi";
import AlertError from "../components/AlertError";
import CodeBlock from "../components/CodeBlock";
import SkelletonPage from "./SkelletonPage";
export default function ComponentDetails() {
  const { id } = useParams();
  const [component, setComponent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `{
                  component(filter:{id:{eq:${id}}}) {
    id
    title
    code
    import
    description
    tech
    category
    file1
    file2
    code2
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
                }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Icaro Jordano bb386ce340209bdcdb721c9cfda244`,
          },
        }
      )
      .then((res) => {
        setComponent(res.data.data["component"]);
        console.log(res.data.data["component"]);
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <section className="w-full mx-auto  lg:flex">
      <AlertError isError={isError} />
      {isLoading ? (
        <SkelletonPage />
      ) : (
        <div className="w-10/12  mx-auto lg:w-8/12 mt-20 lg:ms-8">
          <h2 className="font-semibold overflow-hidden flex items-center text-neutral-900 font-sans text-3xl ">
            {component.title}
            <BsPencilSquare className="ms-2 text-xl text-neutral-500 mt-2" />{" "}
          </h2>

          <p className="text-sm text-neutral-500 my-4 lg:w-11/12">
            {component.description || "..."}
          </p>
          <p className="my-4 text-sm">
            Tecnologias:{" "}
            <span
              className={`text-neutral-500 mx-2 ${
                component.tech ? "underline" : ""
              }`}
            >
              {component.tech || "..."}
            </span>
          </p>

          <p className="my-4 text-sm">
            Category:{" "}
            <span
              className={`text-neutral-500 mx-2 ${
                component.category ? "underline" : ""
              }`}
            >
              {component.category || "..."}
            </span>
          </p>
          {component.import && (
            <p className="bg-red-100 p-1 w-11/12 text-neutral-500 rounded-sm text-sm">
              {component.import}
            </p>
          )}

          <h3 className="text-lg my-4">Examples</h3>
          <div className="my-4 flex flex-col lg:flex-row gap-4  flex-wrap">
            {component.imgex1 ? (
              <CardExample image={component.imgex1.url} code={component.code} />
            ) : (
              <CardSkelleton />
            )}
            {component.imgex2 && (
              <CardExample image={component.imgex2.url} code={component.code} />
            )}
            {component.imgex3 && (
              <CardExample image={component.imgex3.url} code={component.code} />
            )}
          </div>
        </div>
      )}

      <section className=" lg:w-4/12 inline-block min-h-screen  w-full  p-2 bg-gray-800 ">
          <h2 className={`text-xl text-neutral-200 p-4 ps-1 underline-offset-8 ${component.file1?'underline':''}`}>
            {component.file1 || '...'}
          </h2>
        <CodeBlock code={`${component.code ? component.code : "..."}`} />
        {component.file2 && (
          <h2 className="text-xl text-neutral-200 p-4 ps-1 underline-offset-8 underline">
            {component.file2}
          </h2>
        )}
        {component.code2 && 
        <CodeBlock code={`${component.code2 ? component.code2 : "..."}`} />}
      </section>
    </section>
  );
}

