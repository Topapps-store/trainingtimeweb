export default function ServicesSection() {
  const handleOnlinePlanClick = () => {
    const whatsappUrl = "https://wa.me/376379750?text=Hola!%20M'interessen%20els%20plans%20online%20trimestrals";
    window.open(whatsappUrl, "_blank");
  };

  const handlePersonalTrainingClick = () => {
    const whatsappUrl = "https://wa.me/376379750?text=Hola!%20M'interessa%20l'entrenament%20personal%20presencial";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Els Nostres Serveis</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuidem la teva salut amb plans personalitzats que s'adapten al teu estil de vida per millorar la teva qualitat de vida
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Online Quarterly Plans */}
          <div className="bg-card rounded-xl shadow-lg p-8 border hover-lift">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop text-3xl text-primary-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Plans Online Trimestrals</h3>
              <p className="text-muted-foreground">Cuida't des de casa amb un pla integral per sentir-te millor</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Pla nutricional personalitzat per 3 mesos</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Rutines d'entrenament adaptades</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Seguiment setmanal per WhatsApp</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>App mòbil amb tot el contingut</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Ajustos constants segons evolució</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Consultar Preus</div>
              <button
                onClick={handleOnlinePlanClick}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-online-plan"
              >
                Sol·licitar Informació
              </button>
            </div>
          </div>
          
          {/* Monthly Personal Training */}
          <div className="bg-card rounded-xl shadow-lg p-8 border hover-lift">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-friends text-3xl text-accent-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Entrenament Personal</h3>
              <p className="text-muted-foreground">Atenció personalitzada per aconseguir els teus objectius de salut</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                <span>Sessions presencials personalitzades</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                <span>Plans de subscripció flexibles</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                <span>Assessorament nutricional inclòs</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                <span>Seguiment de progrés detallat</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-accent mr-3"></i>
                <span>Horaris adaptats a la teva agenda</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Plans Mensuals</div>
              <button
                onClick={handlePersonalTrainingClick}
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-personal-training"
              >
                Reservar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
