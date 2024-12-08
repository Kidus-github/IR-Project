import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

// eslint-disable-next-line react/prop-types
function Header({ darkmode, setDarkmode }) {
  return (
    <div className="bg-transparent flex justify-between py-10 text-white">
      <div>
        <h1
          className={`text-xl ${!darkmode ? " text-slate-300" : " text-black"}`}
        >
          Stemmer<span className="text-cyan-500 font-bold">Project</span>
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-200 hover:text-slate-900 px-4 py-1.5 rounded z-10 font-semibold">
          Try Stemming
        </button>
        <a
          href="https://github.com/kidus-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={` h-6 w-6 z-10 cursor-pointer border-l-2 border-gray-600 pl-4 ${
              !darkmode ? " text-slate-300" : " text-black"
            }`}
          />
        </a>
        <div
          onClick={() => {
            setDarkmode(!darkmode);
          }}
          className="z-10"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className={`h-5 w-6 z-10 cursor-pointer border-l-2 border-gray-600 pl-2 ${
              !darkmode ? " text-slate-300" : " text-black hover:text-slate-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
