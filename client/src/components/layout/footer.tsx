import { Link } from "wouter";
import TrainingTimeLogo from "@/components/training-time-logo";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <TrainingTimeLogo className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Entrenament personal i nutrició online i presencial. Especialitzats en ajudar persones a canviar el seu físic amb resultats reals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary hover:opacity-80 transition-opacity"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-primary hover:opacity-80 transition-opacity"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-primary hover:opacity-80 transition-opacity"
                data-testid="link-youtube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serveis</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/serveis" className="hover:text-primary transition-colors">
                  Plans Online
                </Link>
              </li>
              <li>
                <Link href="/serveis" className="hover:text-primary transition-colors">
                  Entrenament Personal
                </Link>
              </li>
              <li>
                <Link href="/serveis" className="hover:text-primary transition-colors">
                  Nutrició
                </Link>
              </li>
              <li>
                <Link href="/serveis" className="hover:text-primary transition-colors">
                  
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/sobre-mi" className="hover:text-primary transition-colors">
                  Sobre Mi
                </Link>
              </li>
              <li>
                <Link href="/contacte" className="hover:text-primary transition-colors">
                  Contacte
                </Link>
              </li>
              <li>
                <Link href="/politica-privacitat" className="hover:text-primary transition-colors">
                  Política de Privacitat
                </Link>
              </li>
              <li>
                <Link href="/condicions-us" className="hover:text-primary transition-colors">
                  Condicions d'Ús
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li data-testid="text-phone">+376 379 750</li>
              <li data-testid="text-email">info@trainingtime.ad</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Training Time. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
}
