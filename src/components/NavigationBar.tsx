import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

interface NavigationBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NavigationBar = ({ activeSection, onNavigate }: NavigationBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Technology" },
    { id: "use-cases", label: "Use Cases" },
    { id: "examples", label: "Examples" },
    { id: "benefits", label: "Benefits" },
    { id: "challenges", label: "Ethics" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-medical" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-hero rounded-lg pulse-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-smooth ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              HealthTech AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-smooth hover:text-accent ${
                  activeSection === item.id
                    ? isScrolled ? "text-primary" : "text-accent"
                    : isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => onNavigate("contact")}
              className="bg-primary text-white hover:bg-primary-glow shadow-medical transition-bounce"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-smooth ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-medical">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-smooth hover:text-accent ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                size="sm"
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-white hover:bg-primary-glow"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;