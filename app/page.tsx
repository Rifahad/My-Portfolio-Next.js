import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { GlobeDemo } from "@/components/GlobeDemo";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ParallexEffect } from "@/components/ParallexEffect";
import ParticlesDemo from "@/components/ParticlesDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={NavItems} />
        <img src="/GifImages/Robo2.gif" alt="Robo" className="w-[150px] fixed bottom-10 right-5" />
        <Hero />
        <GlobeDemo />
        <ParallexEffect />
        <Footer />
        <Grid />
        <ParticlesDemo />
        <About />
      </div>
    </main>
  );
}

export default Home;



export const NavItems = [
  { name: 'Home', link: "/", icon: <FaHome /> },
  { name: 'Skills', link: "/", icon: <FaHome /> },
  { name: 'Education', link: "/", icon: <FaHome /> },
  { name: 'Experiences', link: "/", icon: <FaHome /> }
]
