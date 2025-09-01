import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "No tinc temps... com encaixa això en la meva agenda?",
      answer: "No és qüestió de temps, és qüestió de tenir un sistema eficient. Entrenes amb resultats en menys de 3 hores a la setmana, t'alimentes de forma real sense dietes estrictes.",
    },
    {
      question: "En quant temps veuré resultats?",
      answer: "Depèn del teu punt de partida, però millores d'energia i descans en les primeres 2 setmanes. Els canvis físics necessiten més treball, però en 60-90 dies s'aconsegueixen canvis significatius.",
    },
    {
      question: "Viatge molt, menjo fora i la meva vida no és estable... serveix per mi?",
      answer: "Precisament per això, SÍ. El nostre sistema s'adapta a qualsevol situació i estil de vida.",
    },
    {
      question: "Tinc +40 anys i fa molt que no faig res",
      answer: "La majoria dels nostres clients tenen entre 35 i 60 anys i arriben amb dolors, panxa o anys sense cuidar-se. El pla s'adapta 100% a la teva condició actual.",
    },
    {
      question: "Entren al gimnàs o a casa?",
      answer: "On prefereixis o puguis. Preparem cada setmana enfocada a la teva disponibilitat, per gimnàs, casa o hotel amb el material mínim si cal.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Encara tens preguntes?</h2>
          <p className="text-xl text-muted-foreground">Aquí et resolc <strong>les més freqüents.</strong></p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-sm border cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              data-testid={`faq-item-${index}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-primary`}></i>
              </div>
              {openIndex === index && (
                <p className="text-muted-foreground mt-3" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
