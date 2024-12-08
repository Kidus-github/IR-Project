import IntroSection from "./components/IntroSection";
import StemmerSection from "./components/StemmerSection";
import { useState } from "react";
function App() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <div
      className={`px-24 ${
        !darkmode ? "bg-[#1a1b26]" : "bg-white"
      } overflow-x-hidden`}
    >
      <IntroSection darkmode={darkmode} setDarkmode={setDarkmode} />
      <StemmerSection darkmode={darkmode} />
    </div>
  );
}

export default App;
