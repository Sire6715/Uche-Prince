export const About = () => {
  const skills = [
    "React",
    "TailwindCSS",
    "Vite",
    "Figma",
    "Python",
    "SQL",
    "C#",
    "Excel",
    "Google Sheets",
    "Github",
  ];

  return (
    <section
      id="About"
      className="min-h-screen flex flex-col bg-purple-600 items-center justify-center relative"
    >
      <div className="p-[5rem]">
        <h1 className=" text-7xl font-bold px-6 py-4 flex md:flex-col text-white">
          About Me!
        </h1>
        <p className="text-white text-2xl font-bold px-6 py-4 mb-6 leading-8">
          Hi, my name is Uche Prince. I am a recent graduate of the <span className="text-lime-400 font-black"> Federal
          University of Technology, Owerri</span>, where I earned my B.Tech in
          Mathematics. <span className="text-lime-300 font-black">I am a full-stack web designer and an aspiring data
          analyst</span>, with a strong foundation in programming and database
          management. My journey has included freelancing as a web designer,
          where I’ve collaborated on several exciting projects, including
          <span className="text-lime-300 font-black">AFRISPLASH REMOTELY</span>—a platform created to connect Africans with remote
          tech job opportunities worldwide—and VIBE BETA, a music app designed
          to bridge the gap between users and their favorite songs. I also
          interned at <span className="text-lime-300 font-black">Multisoft Consulting</span>, a software development company,
          where I assisted in maintaining data analysis software and received
          training in C# and SQL for data management and backend support.<span className="text-lime-300 font-black">I’m
          proficient in JavaScript, Python, C#, and SQL, and I bring a
          goal-driven, technology-inclined mindset</span> .

          I’m passionate about problem-solving, brainstorming innovative solutions, and applying
          theoretical knowledge to real-world challenges. I’m constantly growing
          my skills in front-end development and data analysis, and I am
          currently seeking opportunities to contribute meaningfully in
          front-end development roles or other technical capacities within
          innovative and growth-oriented organizations. I’m excited to bring my
          energy, creativity, and analytical thinking to a team where I can
          continue learning and make a real impact.
        </p>
      </div>

      <div>
        <h1 className="text-white text-xl font-black px-0">Skills/Tools</h1>

        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
          <div className="flex flex-wrap gap-4">
            {skills?.map((tech, key) => {
              return (
                <span
                  key={key}
                  className="bg-lime-400 text-white font-bold py-1 px-3 rounded-full drop-shadow-xl text-xl hover:bg-lime-300 hover:cursor-pointer transition"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
