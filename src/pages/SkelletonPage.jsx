const SkelletonPage = () => {
  return (
    <div className="w-10/12  mx-auto lg:w-8/12 mt-20 lg:ms-8">
      <h2 className="bg-neutral-400 text-neutral-400 w-3/12 rounded-lg ">a</h2>
      <div className="flex flex-col gap-y-1 my-4">
        <p className="bg-neutral-400 rounded-md text-neutral-400 w-11/12 ">a</p>
        <p className="bg-neutral-400 rounded-md text-neutral-400 w-11/12 ">a</p>
        <p className="bg-neutral-400 rounded-md text-neutral-400 w-5/12 ">a</p>
      </div>
      <p className="w-3/12 flex bg-neutral-400 text-neutral-400 rounded-lg">
        a
      </p>
      <p className="w-3/12 my-4 flex bg-neutral-400 text-neutral-400 rounded-lg">
        a
      </p>
      <div className="my-4 flex flex-col lg:flex-row gap-4  flex-wrap">
        <div className="bg-neutral-400 w-11/12 lg:w-5/12 h-56 flex rounded-lg"></div>
        <div className="bg-neutral-400 w-11/12 lg:w-5/12 h-56 flex rounded-lg"></div>
        <div className="bg-neutral-400 w-11/12 lg:w-5/12 h-56 flex rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkelletonPage;
