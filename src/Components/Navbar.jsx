import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg z-30 border-white/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-2 flex justify-between font-semibold">
        <div className="flex justify-between items-center h-14 w-3/5">
          <a href="home" className="">
            {" "}
            Uche<span className="text-purple-600"> Prince</span>
          </a>
        </div>

        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden my-auto  text-purple-400"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>

        <div className="hidden md:flex justify-between items-center h-14 w-2/5 ">
          <a href="#Home" className="text-purple-600">
            {" "}
            Home
          </a>

          <a href="#About" className="text-purple-600">
            {" "}
            About
          </a>
          <a href="#Contact" className="text-purple-600">
            {" "}
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};
