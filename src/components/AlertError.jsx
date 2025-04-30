import { BiX } from "react-icons/bi"

const AlertError= ({isError})=>{
    return (
        <div
        className={`lg:w-96 w-80 bg-red-300 animate-bounce flex items-center rounded-md ${
          isError ? "h-12" : "h-0"
        } duration-300 transition-all fixed top-5 z-50 left:15 lg:left-96 text-white`}
      >
        <p className={`items-center ${isError ? "flex" : "hidden"}`}>
          <BiX className="p-0.5 text-xl rounded-full mx-2 bg-white text-red-700" />{" "}
          Erro ao carregar componente
        </p>
      </div>
    )

}
export default AlertError