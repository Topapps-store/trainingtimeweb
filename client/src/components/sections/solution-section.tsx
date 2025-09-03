export default function SolutionSection() {
  const solutions = [
    {
      icon: "fas fa-bolt",
      title: "Més energia",
      description: "Millora el descans, redueix l'ansietat i el cortison, recupera l'energia per mantenir-te motivat tot el dia i, així i tot, tenir força per gaudir la resta del dia.",
    },
    {
      icon: "fas fa-dumbbell",
      title: "Recuperar la confiança",
      description: "Reduir el greix i guanyar múscul, recuperar la força i tornar a sentir-te orgullós del teu cos.",
    },
    {
      icon: "fas fa-brain",
      title: "Ment clara i decisions ràpides",
      description: "Mantenir-te durant tota la jornada enfocat i sense cansament mental, preparat per rendir al 100%.",
    },
  
    {
      icon: "fas fa-shield-alt",
      title: "Un cos preparat pel present i futur",
      description: "Minimitza les molèsties, sent-te jove i mantén-te àgil i saludable durant més anys.",
    },
    {
      icon: "fas fa-clock",
      title: "Temps i salut per al que importa",
      description: "Perquè els diners serveixen de poc si no tens l'energia i els anys per gaudir-los.",
    },
  ];

  const handleLearnMoreClick = () => {
    const whatsappUrl = "https://wa.me/376379750";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Si has fet aquell "click" tan necessari per tornar a...
        </h2>        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-lg shadow-sm border hover-lift"
              data-testid={`card-solution-${index}`}
            >
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${solution.icon} text-2xl text-success-foreground`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <p className="text-xl text-muted-foreground mb-8">
            I no parlem de dietes impossibles ni d'hores infinites al gimnàs...
          </p>
          <p className="text-2xl font-semibold">
            Parlem d'un sistema que uneix <span className="text-gradient">entrenament online eficient, nutrició per a la vida real i hàbits saludables.</span>
          </p>
        </div>
        
        <button
          onClick={handleLearnMoreClick}
          className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          data-testid="button-learn-more"
        >
          Vull saber com funciona
        </button>
      </div>
    </section>
  );
}
