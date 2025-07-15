import { useState } from "react";
import { ChevronDown, Brain, Activity, Shield, Users, Lightbulb, AlertTriangle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-healthcare.jpg";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import UseCasesSection from "@/components/UseCasesSection";
import RealWorldExamples from "@/components/RealWorldExamples";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <HeroSection onExplore={() => scrollToSection("about")} />
      </section>

      {/* What Are Supercomputers & Big Data Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Technology Explained
          </Badge>
          <h2 className="text-4xl font-bold mb-6">What Are Supercomputers & Big Data?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the powerful technologies that are transforming healthcare through 
            massive computational power and intelligent data analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="shadow-medical transition-smooth hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-hero rounded-lg pulse-glow">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Supercomputers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ultra-powerful machines capable of performing quadrillions of calculations per second. 
                  In healthcare, they model complex biological processes, simulate drug interactions, 
                  and process massive medical datasets to uncover life-saving insights.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Exascale Computing</Badge>
                  <Badge variant="secondary">Parallel Processing</Badge>
                  <Badge variant="secondary">AI Acceleration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-medical transition-smooth hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-medical rounded-lg pulse-glow">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Big Data in Healthcare</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Vast collections of medical information including patient records, genomic data, 
                  medical imaging, clinical trials, and real-time health monitoring. Advanced analytics 
                  reveal patterns that improve diagnosis, treatment, and prevention.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Electronic Health Records</Badge>
                  <Badge variant="secondary">Genomic Data</Badge>
                  <Badge variant="secondary">Medical Imaging</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Flow Animation */}
        <div className="mt-16 relative">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-16 bg-gradient-tech data-flow"></div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Data flowing through advanced computational systems
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Real World Examples */}
      <RealWorldExamples />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Challenges & Ethics Section */}
      <section id="challenges" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
              Important Considerations
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Challenges & Ethics</h2>
            <p className="text-xl text-muted-foreground">
              Addressing the critical issues in healthcare data and AI implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>Data Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protecting sensitive patient information while enabling 
                  medical research and innovation requires robust security 
                  measures and ethical frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Healthcare Equity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensuring AI systems work fairly across all populations 
                  and don't perpetuate existing healthcare disparities 
                  or create new forms of bias.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <CardTitle>Algorithm Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Making AI decision-making processes understandable 
                  to healthcare providers and patients to maintain 
                  trust and accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;