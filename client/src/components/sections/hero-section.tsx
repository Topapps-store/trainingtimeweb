import { Link } from "wouter";

export default function HeroSection() {
  const handleContactClick = () => {
    const whatsappUrl = "https://wa.me/376379750";
    window.open(whatsappUrl, "_blank");
  };

  const handleFormClick = () => {
    const formUrl = "https://forms.gle/d7wvaSotUTXKdjD88";
    window.open(formUrl, "_blank");
  };

  return (
    <section className="hero-gradient text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          És hora de cuidar-te i <br />
          <span className="text-gradient">sentir-te bé</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
          Millora la teva qualitat de vida amb un <strong>pla personalitzat que s'adapta al teu ritme.</strong> Si tens unn objectiu i un pla estructurat, els resultats només són una conseqüència.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleContactClick}
            className="luxury-gradient text-primary-foreground px-12 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 elegant-shadow tracking-wide"
            data-testid="button-hero-contact"
          >
            <i className="fab fa-whatsapp mr-3"></i>
            Contacta'ns
          </button>
          <Link href="/serveis">
            <button className="border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wide">
              Veure Serveis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
