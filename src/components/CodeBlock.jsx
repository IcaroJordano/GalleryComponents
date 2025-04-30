
const CodeBlock= ({code})=>{
    return (
        <pre className="bg-gray-900 w-[405px] lg:w-[365px] inline-block    text-white p-4 lg:p-6 lg:rounded-lg overflow-x-auto text-xs">
        <code className="">
            {code}
        </code>
      </pre>

    )

}
export default CodeBlock