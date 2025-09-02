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
          És hora de cuidar-te i sentir-te bé<br />
          <span className="text-gradient">amb el teu cos</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
          Millora la teva qualitat de vida amb un <strong>pla personalitzat que s'adapta al teu ritme.</strong> És qüestió de tenir les eines adequades i créixer en el procés.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleFormClick}
            className="bg-success text-success-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            data-testid="button-hero-form"
          >
            <i className="fas fa-clipboard-check mr-2"></i>
            Formulari d'Interès
          </button>
          <button
            onClick={handleContactClick}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            data-testid="button-hero-contact"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            Més Informació
          </button>
          <Link href="/serveis">
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-foreground transition-colors">
              Veure Serveis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
