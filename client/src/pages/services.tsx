import ServicesSection from "@/components/sections/services-section";

export default function Services() {
  const handleContactClick = (serviceType: string) => {
    const whatsappUrl = `https://wa.me/376379750?text=Hola!%20M'interessa%20el%20servei%20de%20${serviceType}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Els Nostres Serveis</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plans personalitzats d'entrenament i nutrició adaptats a la teva vida i objectius
          </p>
        </div>

        <ServicesSection />

        {/* Detailed Service Descriptions */}
        <div className="mt-20 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Plans Online Trimestrals</h3>
              <p className="text-lg text-muted-foreground mb-6">
                El nostre programa online està dissenyat per a persones que volen un canvi real a la seva vida, sense modes ni miracles. 
                Cada trimestre tindràs un programa completament personalitzat que s'adapta als teus horaris i estil de vida.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Pla nutricional adaptat als teus gustos</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Rutines d'entrenament per casa o gimnàs</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Seguiment setmanal amb trucada i amb APP pròpia</span>
                </li>
              </ul>
              <button
                onClick={() => handleContactClick("plans online")}
                className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-online-service-contact"
              >
                Sol·licitar Informació
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Entrenament online"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Entrenament personal"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Entrenament Personal Presencial</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Sessions face-to-face personalitzades amb plans de subscripció mensual flexibles. 
                Ideal per a qui prefereix l'acompanyament directe i la motivació constant.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-accent mr-3"></i>
                  <span>Sessions 1:1 completament personalitzades</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-accent mr-3"></i>
                  <span>Tria quants dies vols entrenar a la setmana</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-accent mr-3"></i>
                  <span>Seguiment nutricional i APP amb pla individualitzat inclòs</span>
                </li>
              </ul>
              <button
                onClick={() => handleContactClick("entrenament personal")}
                className="mt-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-personal-service-contact"
              >
                Reservar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
