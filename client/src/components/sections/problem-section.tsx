export default function ProblemSection() {
  const problems = [
    {
      icon: "fas fa-battery-quarter",
      title: "Dies costa amunt",
      description: "Et lleves cansat, tires de cafè tot el dia i acabes sense forces ni per a la teva família.",
    },
    {
      icon: "fas fa-user-times",
      title: "Físic irreconeixible",
      description: "El mirall no reflecteix l'home fort i segur que vols ser (ni el que vol la teva dona).",
    },
    {
      icon: "fas fa-brain",
      title: "Ment entelada",
      description: "Et costa concentrar-te i dubtes molt més quan has de prendre decisions importants.",
    },
    {
      icon: "fas fa-pills",
      title: "Recorres a «ajudes»",
      description: "Utilitzes suplements que has vist per internet o medicació per pal·liar els dolors.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          A TOTS els que ens hem dedicat en cos i ànima per triomfar en la nostra professió, (a la llarga) ens ha passat...
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
