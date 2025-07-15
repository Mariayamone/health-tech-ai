import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Dna, 
  Search, 
  Eye, 
  Globe, 
  ArrowRight 
} from "lucide-react";
import DemoModal from "./DemoModal";

const UseCasesSection = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const useCases = [
    {
      icon: Heart,
      title: "Disease Prediction & Prevention",
      description: "AI analyzes patient data, genetic markers, and lifestyle factors to predict disease onset years before symptoms appear, enabling preventive interventions.",
      features: ["Risk Assessment", "Early Screening", "Preventive Care"],
      gradient: "bg-gradient-medical",
      demoType: "disease-prediction",
    },
    {
      icon: Dna,
      title: "Precision Medicine",
      description: "Personalized treatment plans based on individual genetic profiles, medical history, and real-time biomarkers for optimal therapeutic outcomes.",
      features: ["Genetic Analysis", "Personalized Dosing", "Treatment Optimization"],
      gradient: "bg-gradient-hero",
      demoType: "precision-medicine",
    },
    {
      icon: Search,
      title: "Drug Discovery",
      description: "Supercomputers simulate molecular interactions and predict drug efficacy, reducing development time from decades to years while improving success rates.",
      features: ["Molecular Modeling", "Clinical Trial Optimization", "Safety Prediction"],
      gradient: "bg-gradient-tech",
      demoType: "drug-discovery",
    },
    {
      icon: Eye,
      title: "AI Diagnostics",
      description: "Advanced imaging analysis and pattern recognition systems assist doctors in detecting diseases with superhuman accuracy and speed.",
      features: ["Medical Imaging", "Pattern Recognition", "Diagnostic Support"],
      gradient: "bg-gradient-medical",
      demoType: "ai-diagnostics",
    },
    {
      icon: Globe,
      title: "Global Health Monitoring",
      description: "Real-time analysis of population health data to track disease outbreaks, predict epidemics, and coordinate global health responses.",
      features: ["Epidemic Tracking", "Population Analytics", "Resource Allocation"],
      gradient: "bg-gradient-hero",
      demoType: "global-health",
    },
  ];

  return (
    <section id="use-cases" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
          Real Applications
        </Badge>
        <h2 className="text-4xl font-bold mb-6">Transforming Healthcare</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how supercomputers and big data are revolutionizing patient care, 
          medical research, and global health outcomes across these key areas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <Card 
            key={index} 
            className="group shadow-card hover:shadow-medical transition-smooth hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedDemo(useCase.demoType)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className={`p-3 ${useCase.gradient} rounded-lg pulse-glow`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-smooth" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                {useCase.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {useCase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {useCase.features.map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Demo Placeholder */}
      <div className="mt-16 p-8 bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Interactive Demo Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            Experience a live healthcare data analytics dashboard showing how AI processes 
            medical information in real-time.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-16 bg-gradient-tech data-flow"></div>
            </div>
            <span className="text-sm text-muted-foreground">Simulating data processing...</span>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={selectedDemo !== null} 
        onClose={() => setSelectedDemo(null)}
        demoType={selectedDemo || ""}
      />
    </section>
  );
};

export default UseCasesSection;