import { Button } from "@/components/ui/button";
import { ChevronDown, Activity, Brain, Database } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

interface HeroSectionProps {
  onExplore: () => void;
}

const HeroSection = ({ onExplore }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 p-4 bg-white/10 rounded-full backdrop-blur-sm float">
        <Brain className="h-8 w-8 text-accent pulse-glow" />
      </div>
      <div className="absolute top-40 right-20 p-4 bg-white/10 rounded-full backdrop-blur-sm float" style={{ animationDelay: '2s' }}>
        <Activity className="h-8 w-8 text-secondary pulse-glow" />
      </div>
      <div className="absolute bottom-40 left-20 p-4 bg-white/10 rounded-full backdrop-blur-sm float" style={{ animationDelay: '4s' }}>
        <Database className="h-8 w-8 text-accent pulse-glow" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Revolutionizing Healthcare
          <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Through Data & Supercomputing
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore how cutting-edge technology is saving lives and shaping the future of medicine
          through unprecedented computational power and intelligent data analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={onExplore}
            className="bg-white text-primary hover:bg-white/90 shadow-glow transition-bounce text-lg px-8 py-6"
          >
            Explore the Technology
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white/10 backdrop-blur-sm transition-smooth text-lg px-8 py-6"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10M+</div>
            <div className="text-white/80">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50%</div>
            <div className="text-white/80">Faster Diagnosis</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">1000+</div>
            <div className="text-white/80">Medical Breakthroughs</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </div>
  );
};

export default HeroSection;