export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 w-full z-40 flex bg-purple-600  flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl  focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "Opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {" "}
        Home
      </a>

      <a
        href="#About"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "Opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {" "}
        About
      </a>
      <a
        href="#Contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "Opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {" "}
        Contact me
      </a>
    </div>
  );
};
