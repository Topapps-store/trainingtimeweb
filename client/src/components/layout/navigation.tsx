import { useState } from "react";
import { Link, useLocation } from "wouter";
import TrainingTimeLogo from "@/components/training-time-logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigationLinks = [
    { href: "/", label: "Inici" },
    { href: "/serveis", label: "Serveis" },
    { href: "/sobre-mi", label: "Sobre Mi" },
  ];

  const handleContactClick = () => {
    const whatsappUrl = "https://wa.me/376379750";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <TrainingTimeLogo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleContactClick}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity font-semibold"
                data-testid="button-contact"
              >
                Contacte
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-background w-full max-w-sm h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <TrainingTimeLogo className="h-8 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground"
                data-testid="button-close-mobile-menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <nav className="space-y-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium transition-colors ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold mt-6"
                data-testid="button-mobile-contact"
              >
                Sol·licitar Informació
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
