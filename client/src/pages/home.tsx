import HeroSection from "@/components/sections/hero-section";
import ProblemSection from "@/components/sections/problem-section";
import SolutionSection from "@/components/sections/solution-section";
import ServicesSection from "@/components/sections/services-section";
import ResultsGallery from "@/components/sections/results-gallery";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import DecisionSection from "@/components/sections/decision-section";
import FAQSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ResultsGallery />
      <HowItWorksSection />
      {/* <TestimonialsSection /> */}
      <DecisionSection />
      <FAQSection />
    </div>
  );
}
