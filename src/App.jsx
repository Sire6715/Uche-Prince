import { Navbar} from "./Components/Navbar";
import { MobileMenu } from "./Components/MobileMenu";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;
