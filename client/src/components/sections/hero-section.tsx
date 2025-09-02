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
          Sents que la teva feina no et deixa temps<br />
          <span className="text-gradient">(ni ganes) de cuidar-te més?</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
          No és mandra ni poca disciplina, és no tenir un <strong>pla clar, senzill i estructurat.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleFormClick}
            className="bg-success text-success-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            data-testid="button-hero-form"
          >
            <i className="fas fa-clipboard-check mr-2"></i>
            Avaluació Gratuïta
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
