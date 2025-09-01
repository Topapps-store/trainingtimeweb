export default function SolutionSection() {
  const solutions = [
    {
      icon: "fas fa-bolt",
      title: "Energia sense límits",
      description: "Despertar-te amb ganes, mantenir-te motivat tot el dia i, així i tot, tenir força per gaudir la resta del dia.",
    },
    {
      icon: "fas fa-dumbbell",
      title: "Un físic que imposa respecte",
      description: "Perdre la panxa i guanyar múscul, recuperar la força i tornar a sentir-te orgullós del teu cos.",
    },
    {
      icon: "fas fa-brain",
      title: "Ment clara i decisions ràpides",
      description: "Mantenir-te durant tota la jornada enfocat i sense cansament mental, preparat per rendir al 100%.",
    },
    {
      icon: "fas fa-fire",
      title: "Testosterona i vitalitat al punt",
      description: "Més potència, més desig i més caràcter. La biologia natural dels homes treballant al teu favor.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Un cos preparat per l'èxit",
      description: "Oblida't de lesions, achaques i dependència. Mantén-te àgil i saludable durant més anys.",
    },
    {
      icon: "fas fa-clock",
      title: "Temps i salut per al que importa",
      description: "Perquè els diners serveixen de poc si no tens l'energia i els anys per gaudir-los.",
    },
  ];

  const handleLearnMoreClick = () => {
    const whatsappUrl = "https://wa.me/34XXXXXXXXX";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Però arriba el moment en el que cal tornar a posar tot en ordre.
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          I tornar a ser l'home que <strong>la teva feina, la teva família i TU necessiteu.</strong>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-lg shadow-sm border hover-lift"
              data-testid={`card-solution-${index}`}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${solution.icon} text-2xl text-primary-foreground`}></i>
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
