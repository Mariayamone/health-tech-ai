import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Award, TrendingUp } from "lucide-react";

const RealWorldExamples = () => {
  const examples = [
    {
      title: "COVID-19 Pandemic Modeling",
      organization: "Multiple Global Institutions",
      description: "Supercomputers across the world processed massive datasets to model virus spread, predict hotspots, and optimize vaccine distribution strategies, saving millions of lives.",
      impact: "500M+ People Protected",
      status: "Ongoing",
      category: "Epidemic Response",
      link: "#",
    },
    {
      title: "Cancer Moonshot Initiative",
      organization: "National Cancer Institute",
      description: "AI-powered analysis of genomic and clinical data accelerates cancer research, identifying new therapeutic targets and personalizing treatment approaches.",
      impact: "2x Faster Research",
      status: "Active",
      category: "Cancer Research",
      link: "#",
    },
    {
      title: "IBM Watson for Oncology",
      organization: "IBM & Memorial Sloan Kettering",
      description: "AI system analyzes patient data and medical literature to recommend personalized cancer treatment options, supporting oncologists worldwide.",
      impact: "50+ Hospitals",
      status: "Deployed",
      category: "Clinical Decision Support",
      link: "#",
    },
    {
      title: "UK Biobank Analysis",
      organization: "UK Biobank",
      description: "Deep learning algorithms analyze genetic and health data from 500,000 participants to uncover disease mechanisms and drug targets.",
      impact: "1000+ Studies",
      status: "Research Platform",
      category: "Population Health",
      link: "#",
    },
    {
      title: "Google DeepMind AlphaFold",
      organization: "DeepMind Technologies",
      description: "AI system predicts 3D protein structures, revolutionizing drug discovery and biological research with unprecedented accuracy.",
      impact: "200M+ Structures",
      status: "Open Source",
      category: "Protein Research",
      link: "#",
    },
    {
      title: "Digital Pathology AI",
      organization: "PathAI & Partners",
      description: "Machine learning models analyze pathology slides to detect cancer and other diseases with higher accuracy than traditional methods.",
      impact: "95% Accuracy",
      status: "Clinical Trials",
      category: "Diagnostic AI",
      link: "#",
    },
  ];

  return (
    <section id="examples" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Real-World Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore groundbreaking initiatives where supercomputers and AI are already 
            transforming healthcare outcomes around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-medical transition-smooth group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">
                      {example.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
                      {example.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {example.organization}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-smooth" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {example.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">
                        {example.impact}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {example.status}
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/5 transition-smooth"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Links Section */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dive Deeper into the Research</h3>
            <p className="text-muted-foreground mb-6">
              Access peer-reviewed papers, case studies, and comprehensive reports 
              on healthcare AI and supercomputing applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="transition-smooth hover:bg-primary/5">
                <Award className="mr-2 h-4 w-4" />
                Research Papers
              </Button>
              <Button variant="outline" className="transition-smooth hover:bg-secondary/5">
                <Users className="mr-2 h-4 w-4" />
                Case Studies
              </Button>
              <Button variant="outline" className="transition-smooth hover:bg-accent/5">
                <ExternalLink className="mr-2 h-4 w-4" />
                YouTube Explainers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldExamples;