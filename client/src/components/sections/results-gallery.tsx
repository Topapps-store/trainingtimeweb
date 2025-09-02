import { useQuery } from "@tanstack/react-query";
import type { Transformation } from "@shared/schema";

export default function ResultsGallery() {
  const { data: transformations, isLoading } = useQuery<Transformation[]>({
    queryKey: ["/api/transformations"],
  });

  const handleResultsClick = () => {
    const whatsappUrl = "https://wa.me/376379750?text=Hola!%20Vull%20veure%20més%20resultats%20dels%20vostres%20clients";
    window.open(whatsappUrl, "_blank");
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos Reals. Resultats Reals.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos Reals. Resultats Reals.</h2>
          <p className="text-xl text-muted-foreground">
            NO tenen més temps que tu. NO tenen cuiners a casa. NO tenen menys edat ni un metabolisme diferent.<br />
            <strong>Són homes iguals que tu</strong>, però que van donar el pas <strong>sense excuses.</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformations?.map((transformation, index) => (
            <div 
              key={transformation.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift"
              data-testid={`card-transformation-${index}`}
            >
              <img 
                src={transformation.imageUrl || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
                alt={`Transformació de ${transformation.clientName}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2" data-testid={`text-client-name-${index}`}>
                  {transformation.clientName}
                </h4>
                <p className="text-muted-foreground text-sm" data-testid={`text-result-${index}`}>
                  {transformation.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={handleResultsClick}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            data-testid="button-more-results"
          >
            Veure Més Resultats
          </button>
        </div>
      </div>
    </section>
  );
}
