export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Entres al programa?",
      description: "No treballem amb tothom... i per això funciona. En el primer contacte veiem si el programa encaixa en el que busques.",
      color: "primary",
    },
    {
      number: 2,
      title: "El teu objectiu, el nostre repte",
      description: "Un entrenador personal i una nutricionista treballarem per tu, amb la certesa que no fem programes massificats.",
      color: "primary",
    },
    {
      number: 3,
      title: "Estratègia personalitzada",
      description: "Dissenyem conjuntament un pla complet a la teva mida segons el teu nivell, els teus horaris i fins i tot els teus gustos personals.",
      color: "primary",
    },
    {
      number: 4,
      title: "Tot a la teva mà",
      description: "Tota la teva planificació al mòbil dins de l'App: entrenaments, menjars, suplements, guies, recordatoris, evolució...",
      color: "accent",
    },
    {
      number: 5,
      title: "Revisió i ajustos constants",
      description: "Revisem periòdicament el teu progrés i actualitzem el teu pla segons les teves necessitats. Així sempre estàs acompanyat.",
      color: "accent",
    },
    {
      number: 6,
      title: "Resultats inevitables",
      description: "Amb el nostre mètode provat i l'acompanyament constant, els resultats arriben de forma natural i sostenible.",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Com funciona el programa Training Time?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="text-center p-6"
              data-testid={`step-${step.number}`}
            >
              <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-${step.color}-foreground`}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
