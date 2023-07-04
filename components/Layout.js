import { useState } from "react";
import Link from "next/link";

import Header from "./Header";
import Purcharse from "./Purcharse";

import Footer from "./Footer";
import Copyright from "./Copyright";
import Preloader from "./Preloader";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  return (
    <>
      <Header />
      <Purcharse />
      {children}

      <Footer />
      <Copyright />
      <Preloader />
    </>
  );
}

export default Layout;
