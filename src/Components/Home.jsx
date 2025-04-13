export const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex bg-[#f2f2f2] items-center justify-center relative mx-[3rem] my-[-2rem]"
    >
      <div>
        <h1 className=" text-6xl font-semibold px-6 py-4 flex md:flex-col text-purple-600">
          HI I'M UCHE PRINCE{" "}
          <span className="text-lime-400 text-2xl">
            {" "}
            &lt;Web designer / Data Analyst&gt;
          </span>{" "}
        </h1>
        <p className="text-black text-2xl font-semibold px-6 py-4 mb-6 leading-8">
          Uche Prince is a full-stack web designer and aspiring data analyst
          with a B.Tech in Mathematics from the Federal University of
          Technology, Owerri. With a strong foundation in programming and
          database management, he has built a growing portfolio through
          freelance work, delivering responsive, user-friendly web applications
          using technologies such as HTML, CSS, JavaScript, React, python, and
          MySQL. Uche is driven by a passion for solving real-world problems
          through technology and data.
        </p>
        <div className="ml-5 flex align-middle w-1/2 bg-purple-400 h-14">
          <button className="w-1/2 font-bold bg-white text-purple-500 hover:shadow-2xl hover:bg-purple-300 hover:text-white px-4 py-2 m-1 hover:cursor-pointer transition">
            Porfolio
          </button>
          <button className="w-1/2 font-black bg-lime-400 hover:shadow-2xl hover:bg-lime-300 text-white px-4 py-2 hover:cursor-pointer transition">
            Hire me<span>#</span>
          </button>
        </div>
      </div>
    </section>
  );
};
