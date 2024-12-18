import stem from "../logic/Stemmer";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function StemmerSection({ darkmode }) {
  const [query, setQuery] = useState("");
  const [stemmed, setStemmed] = useState("");
  const [visiblity, setVisibility] = useState(false);
  return (
    <section className="relative h-screen">
      <div
        className={` h-full  bg-[url('src/assets/fidel2.png')]  bg-cover ${
          !darkmode
            ? "bg-[#1a1b26] opacity-[0.8]"
            : "bg- transparent opacity-[0.2]"
        }`}
      ></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex-col">
          <h1
            className={`${
              !darkmode ? "text-gray-400 " : "text-gray-900"
            } text-8xl font-bold`}
          >
            Stemmer Project
          </h1>
          <textarea
            name=""
            id=""
            value={query}
            className={`${
              !darkmode
                ? "text-gray-400 bg-[#212239] border-slate-400 "
                : "text-gray-900 bg-gray-400 border-slate-600 placeholder:text-gray-100"
            } w-full rounded-xl max-h-64 min-h-16  border-[1px] mt-10 flex p-4`}
            placeholder="Write Text"
            onChange={(e) => setQuery(e.target.value.toString())}
          ></textarea>
          <div className=" w-full mt-4">
            <div
              className={`${
                !darkmode ? "text-gray-400 " : "text-gray-900 "
              }flex w-full justify-center rounded`}
            >
              <span className="border-2 px-6 py-2 rounded-tl-lg rounded-bl-lg">
                Stemmer Word
              </span>
              <span className="border-t-2 border-b-2 px-6 py-2 ">
                Stemmer Pharagrph
              </span>
              <span className="border-2 px-6 py-2 rounded-tr-lg rounded-br-lg">
                Lexical Analyzer
              </span>
            </div>
          </div>
          <div className=" flex justify-center mt-4">
            <div
              className=" bg-cyan-400 z-10 w-fit py-2 px-9 rounded text-slate-100 font-semibold  cursor-pointer hover:bg-cyan-600"
              onClick={() => {
                setStemmed(stem(query));
                setVisibility(true);
              }}
            >
              Submit
            </div>
          </div>
          {visiblity ? (
            <div
              className={`${!darkmode ? "text-gray-400 " : "text-gray-900 "}`}
            >
              Result: {stemmed}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default StemmerSection;
