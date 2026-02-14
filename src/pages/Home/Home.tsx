import NavBar from "./sections/NavBar";
import { } from "react";
import "../Home/components/styles.css"
// import { register } from "module";
// import TextRevealLeft from "./components/TextRevealLeft";
// import { config } from "../../config";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Achievements from "./sections/Achievements";

export default function Home() {
  return (
    <div className="lenis flex flex-col w-full min-h-screen px-5 scroll-smooth">
      <NavBar />
      <Hero />
      <TechStack />
      <Achievements />
      <Works />
      
      <Contact/>
    </div>
  )
}