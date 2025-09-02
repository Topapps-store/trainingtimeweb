export default function ProblemSection() {
  const problems = [
    {
      icon: "fas fa-battery-quarter",
      title: "Energia baixa",
      description: "Et sents cansat durant el dia i t'agradaria tenir més vitalitat per gaudir del temps amb la família.",
    },
    {
      icon: "fas fa-user-times",
      title: "Vols sentir-te millor",
      description: "T'agradaria veure't i sentir-te més en forma, amb un físic que et faci sentir segur i còmode.",
    },
    {
      icon: "fas fa-brain",
      title: "Claredat mental",
      description: "Vols millorar la teva concentració i sentir-te més enfocat en les decisions importants.",
    },
    {
      icon: "fas fa-pills",
      title: "Necessites orientació",
      description: "T'agradaria tenir una guia clara sobre què fer per millorar la teva salut i forma física.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Quan dediquem tota la nostra energia a la feina, sovint descuidem aspectes importants...
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift"
              data-testid={`card-problem-${index}`}
            >
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${problem.icon} text-2xl text-destructive-foreground`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
