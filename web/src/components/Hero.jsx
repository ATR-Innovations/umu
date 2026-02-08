// import Kalima from "assets/kalima.png";
// import Flag from "assets/flag.png";

const Hero = ({ onScroll }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (onScroll) onScroll(id);
  };

  return (
    <main id="main-content" className="min-h-screen">
      {/* ==================== HOME PAGE ==================== */}
      <section id="home" className="page-section active-section">
        {/* Hero */}
        <div className="hero py-16 md:py-24 text-center text-primary">
          <div className="hero-content container mx-auto px-4">
            <div className='flex flex-col justify-center mb-6'>

                <img src="assets/kalima.png" alt="UMU Logo" className="h-20 mx-auto object-cover" onError={(e) => e.target.src = 'https://placehold.co/150x150?text=Logo'} />

                <img src="assets/flag.png" alt="UMU Logo" className="h-64 md:h-64 mx-auto object-contain" onError={(e) => e.target.src = 'https://placehold.co/150x150?text=Logo'} />

            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-sm">
              United Muslim Ummah
              <span className="block textred text-2xl md:text-3xl mt-4 font-bold">
                We are working for the unity of the Ummah
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-2xl mx-auto opacity-90">
              Our task is to keep peace and tranquillity to protect spiritual values and the unity of Ummah, to establish peace, happiness and prosperity all over the world. 
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => scrollToSection("mission-section")}
                className="bg-gold text-primary-dark px-8 py-3 rounded-lg font-bold hover:bg-white transition-all shadow-lg"
              >
                Our Mission
              </button>

              <button
                onClick={() => scrollToSection("contact-section")}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;