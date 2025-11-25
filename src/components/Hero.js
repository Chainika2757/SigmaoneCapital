import NavBar from "../components/Navbar/NavBar";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="hero">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero_bg.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar + Hero Content */}
      <div className="relative z-10 flex flex-col h-full items-center">
        {/* Navbar top pe fix */}
        <NavBar />

        {/* Content center me */}
        <div className="flex flex-1 items-center ;justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">SMARTER MOVES<br />STRONGER OUTCOMES</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
