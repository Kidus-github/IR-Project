// eslint-disable-next-line react/prop-types
function IntroBody({ darkmode }) {
  return (
    <div className="flex justify-center items-center pt-24 z-10">
      <div className="text-center">
        <p
          className={`${!darkmode ? "text-gray-400 " : "text-gray-900"}text-lg`}
        >
          This is the v1 of the project
        </p>
        <h1
          className={`${
            !darkmode ? "text-white " : "text-black"
          } text-[60px] font-bold`}
        >
          Stemmer Project
        </h1>
        <p
          className={`${!darkmode ? "text-gray-400 " : "text-gray-900"}text-lg`}
        >
          This version includes amharic stemmer only
        </p>
        <div className="flex gap-2 mt-10">
          <div
            className=" bg-cyan-400 z-10 w-full py-2 px-4 rounded text-slate-900 font-semibold  cursor-pointer hover:bg-cyan-600"
            onClick={() =>
              (window.location.href = "https://github.com/kidus-github")
            }
          >
            Learn More
          </div>
          <div className="border-slate-600 grow flex justify-center h-11 w-full items-center whitespace-pre rounded-md border pl-4 pr-10 text-sm backdrop-blur-md cursor-pointer">
            <p
              className={`${
                !darkmode
                  ? "text-slate-300 before:text-slate-400  hover:text-slate-50"
                  : "text-gray-900 before:text-slate-400  hover:text-slate-600"
              } before:mr-2 before:content-['$'] font-mono `}
            >
              npm install IR Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroBody;
