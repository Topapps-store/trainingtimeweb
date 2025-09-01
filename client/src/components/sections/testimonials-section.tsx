import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">El que diuen, els que ens coneixen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-muted rounded w-24 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-16"></div>
                  </div>
                </div>
                <div className="h-16 bg-muted rounded"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">El que diuen, els que ens coneixen</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-card p-6 rounded-lg shadow-sm border hover-lift"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"} 
                  alt={`Testimoni de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-primary">
                    {[...Array(parseInt(testimonial.rating))].map((_, starIndex) => (
                      <i key={starIndex} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
