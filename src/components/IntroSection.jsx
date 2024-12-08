import Header from "./Header";
import IntroBody from "./IntroBody";

// eslint-disable-next-line react/prop-types
function IntroSection({ darkmode, setDarkmode }) {
  return (
    <section className="h-screen flex-col overflow-x-hidden	">
      <img
        src="src/assets/background.png"
        alt=""
        className=" flex-none absolute max-w-[80%] -z-0 "
        decoding="async"
      />
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />

      <div className="flex-grow">
        <IntroBody darkmode={darkmode} />
      </div>
    </section>
  );
}

export default IntroSection;
