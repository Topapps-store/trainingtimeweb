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
      title: "NO FER RES",
      description: "Seguir com fins ara, veient com la teva energia baixa cada vegada més, com la panxa i l'estrès s'apoderen del teu cos.",
      color: "destructive",
    },
    {
      number: 2,
      title: "INTENTAR FER-HO TU SOL",
      description: "Seguir provant «dietes miracle», veient vídeos a xarxes, comprant suplements a l'atzar... i tornant al mateix punt.",
      color: "accent",
    },
    {
      number: 3,
      title: "UNIR-TE AL PROGRAMA",
      description: "Fer un pas endavant, invertir en la teva salut i tenir la seguretat de comptar amb un equip professional i un mètode provat.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Arribats a aquest punt, és moment de prendre una decisió i NOMÉS hi ha 3 opcions:
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
          <h3 className="text-2xl font-bold mb-6">I si encara continues llegint això, és que saps la resposta correcta.</h3>
          <p className="text-xl text-muted-foreground mb-8">És el moment de prendre acció.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleFormClick}
              className="bg-success text-success-foreground px-10 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
              data-testid="button-form-cta"
            >
              <i className="fas fa-clipboard-check mr-2"></i>
              AVALUACIÓ GRATUÏTA
            </button>
            <button
              onClick={handleFinalCTAClick}
              className="bg-primary text-primary-foreground px-12 py-4 rounded-lg text-xl font-bold hover:opacity-90 transition-opacity"
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
