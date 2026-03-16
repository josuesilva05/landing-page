import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden text-white bg-[#6D28D9] w-full relative">
      {/* Global Background / Designer Image (Z-0) */}
      <div className="fixed inset-0 z-0 flex justify-center items-end pointer-events-none">
        <img
          alt="Designer"
          className="h-[60vh] lg:h-[92vh] w-auto object-cover opacity-80 saturate-0 mix-blend-luminosity"
          src={`${import.meta.env.BASE_URL}assets/848d89a4-9074-40a7-8a7a-5d6d38_bebccf3e3480.png`}
          style={{
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            objectPosition: "center top",
          }}
        />
      </div>

      <Navigation />
      <Hero />
      <Services />
      {/* <Clients /> */}
      <Profile />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
