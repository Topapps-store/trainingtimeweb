export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qui som i per què podem ajudar-te?</h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Fundador Training Time"
              className="rounded-xl shadow-lg w-full"
              data-testid="img-founder"
            />
          </div>
          
          <div>
            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <i className="fas fa-quote-left text-2xl text-primary mb-4"></i>
              <div className="space-y-4 text-lg">
                <p data-testid="text-founder-intro">
                  "Em dic <strong>[NOM DEL FUNDADOR]</strong> i porto més de [X] anys treballant com a entrenador personal online (i uns altres tants en presencial).
                </p>
                <p data-testid="text-founder-experience">
                  Després de tractar amb desenes de clients diferents i veure els mateixos problemes en homes +40 anys amb feines molt exigents, fa [X] anys vaig decidir crear per a ells el programa <strong>TRAINING TIME.</strong>
                </p>
                <p data-testid="text-founder-mission">
                  Un sistema exclusiu perquè, els que tenen molt poc temps lliure, puguin tenir un <strong>físic en forma, potenciar el seu rendiment i assegurar una salut present i futura.</strong>"
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-experience-years">+[X]</div>
                <div className="text-sm text-muted-foreground">Anys d'experiència</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-clients-transformed">+[X]</div>
                <div className="text-sm text-muted-foreground">Clients transformats</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-success-rate">[X]%</div>
                <div className="text-sm text-muted-foreground">Èxit garantit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-bold mb-4">La Nostra Metodologia</h3>
            <p className="text-muted-foreground mb-4">
              El nostre enfocament es basa en tres pilars fonamentals: entrenament eficient, 
              nutrició sostenible i canvi d'hàbits a llarg termini.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Personalització total segons les teves necessitats</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Adaptació constant segons els teus progressos</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Suport 24/7 per l'equip expert</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-bold mb-4">Per Què Training Time?</h3>
            <p className="text-muted-foreground mb-4">
              Ens especialitzem en homes ocupats que volen resultats reals sense sacrificar 
              la seva carrera professional ni el temps amb la família.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Experiència demostrada amb centenars de clients</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Mètode provat i basat en evidència científica</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-primary mr-3"></i>
                <span>Equip multidisciplinari d'experts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
