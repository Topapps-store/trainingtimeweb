export default function DecisionSection() {
  const handleFinalCTAClick = () => {
    const whatsappUrl = "https://wa.me/376379750?text=Hola!%20Vull%20sol·licitar%20accés%20al%20programa%20Training%20Time";
    window.open(whatsappUrl, "_blank");
  };

  const handleFormClick = () => {
    const formUrl = "https://forms.gle/d7wvaSotUTXKdjD88";
    window.open(formUrl, "_blank");
  };

  const options = [
    {
      number: 1,
      title: "MANTENIR L'STATUS QUO",
      description: "Continuar amb la rutina actual, acceptant que les coses es mantinguin com estan.",
      color: "destructive",
    },
    {
      number: 2,
      title: "PROVAR PER TU MATEIX",
      description: "Intentar trobar la teva pròpia solució amb la informació que trobes per internet, encara que pot ser un camí més llarg.",
      color: "accent",
    },
    {
      number: 3,
      title: "INVERTIR EN LA TEVA SALUT",
      description: "Decidir-te a cuidar-te amb l'ajuda de professionals i un pla personalitzat que t'acompanyi en el procés.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tens 3 camins per endavant, quin triaries?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div 
              key={option.number}
              className={`bg-card p-8 rounded-lg shadow-lg text-center border-2 border-${option.color}`}
              data-testid={`card-option-${option.number}`}
            >
              <div className={`w-16 h-16 bg-${option.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-${option.color}-foreground`}>
                {option.number}
              </div>
              <h3 className={`text-xl font-semibold mb-4 text-${option.color}`}>
                {option.title}
              </h3>
              <p className="text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Si has arribat fins aquí, potser és hora de fer el pas.</h3>
          <p className="text-xl text-muted-foreground mb-8">Comença el teu camí cap a una vida més saludable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleFormClick}
              className="bg-success text-success-foreground px-12 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 elegant-shadow tracking-wide"
              data-testid="button-form-cta"
            >
              <i className="fas fa-clipboard-check mr-3"></i>
              OMPLIR FORMULARI
            </button>
            <button
              onClick={handleFinalCTAClick}
              className="luxury-gradient text-primary-foreground px-14 py-4 rounded-full text-xl font-bold hover:opacity-90 transition-all duration-300 elegant-shadow tracking-wide"
              data-testid="button-final-cta"
            >
              SOL·LICITAR ACCÉS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
