import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
