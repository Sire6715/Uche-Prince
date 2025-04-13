import { Contact } from "./Contact";
export const Footer = () => {
  return (
    <section
      id="Contact"
      className="md:px-[6rem] md:my-[9rem] my-[3rem] md:p-[5rem] p-[2.5rem] h-56 md:flex flex-col-reverse  bg-[#f2f2f2] align-baseline justify-between items-center relative"
    >
      <div>
        <h1 className="md:text-7xl text-3xl flex flex-col font-black text-purple-500 w-1/2">
          <span>LETS </span>
          WORK TOGETHER!
        </h1>

        <ul>
        </ul>
      </div>

      <div className="md:w-1/2 w-full">
        <Contact />
      </div>
    </section>
  );
};
