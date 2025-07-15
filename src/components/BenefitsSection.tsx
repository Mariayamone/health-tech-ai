import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Target, 
  Globe, 
  DollarSign, 
  Users, 
  Shield,
  Zap,
  Heart
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Medical Care",
      description: "Reduce diagnosis time from days to minutes with AI-powered analysis and real-time processing.",
      stat: "75% Faster",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Target,
      title: "Early Disease Detection",
      description: "Identify health risks years before symptoms appear, enabling preventive care and better outcomes.",
      stat: "5 Years Earlier",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Global Health Access",
      description: "Bring advanced medical expertise to underserved regions through AI-assisted telemedicine.",
      stat: "Worldwide Reach",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: DollarSign,
      title: "Reduced Healthcare Costs",
      description: "Lower treatment costs through prevention, early intervention, and optimized resource allocation.",
      stat: "$2.7T Saved",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Personalized Treatment",
      description: "Tailor medical interventions to individual genetic profiles and health characteristics.",
      stat: "100% Personalized",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Shield,
      title: "Improved Safety",
      description: "Reduce medical errors and adverse drug reactions through AI-powered safety monitoring.",
      stat: "90% Safer",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const testimonials = [
    {
      quote: "AI-powered diagnostics helped detect my condition 3 years earlier than traditional methods would have. This early intervention saved my life.",
      author: "Sarah M.",
      role: "Cancer Survivor",
      avatar: "👩‍⚕️",
    },
    {
      quote: "Our rural clinic now has access to world-class diagnostic capabilities through telemedicine AI. It's transforming how we serve our community.",
      author: "Dr. James Chen",
      role: "Rural Healthcare Provider",
      avatar: "👨‍⚕️",
    },
    {
      quote: "The precision medicine approach reduced my treatment side effects by 60% while improving effectiveness. Personalized healthcare is the future.",
      author: "Maria Rodriguez",
      role: "Patient Advocate",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
          Community Impact
        </Badge>
        <h2 className="text-4xl font-bold mb-6">Benefits to Communities</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how supercomputers and big data are creating tangible benefits 
          for patients, healthcare providers, and communities worldwide.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className="shadow-card hover:shadow-medical transition-smooth hover:-translate-y-1 group"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className={`p-3 ${benefit.bgColor} rounded-lg pulse-glow`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <Badge className={`${benefit.bgColor} ${benefit.color} border-transparent font-bold`}>
                  {benefit.stat}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/30 rounded-2xl p-8">
        <div className="text-center mb-12">
          <Heart className="h-8 w-8 text-accent mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Real Stories, Real Impact</h3>
          <p className="text-muted-foreground">
            Hear from patients and healthcare providers who have experienced 
            the life-changing benefits of healthcare AI and supercomputing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card bg-white">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Global Impact Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-accent mb-2">10M+</div>
          <div className="text-muted-foreground">Patients Helped</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-secondary mb-2">150+</div>
          <div className="text-muted-foreground">Countries Reached</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-2">$50B</div>
          <div className="text-muted-foreground">Healthcare Savings</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-accent mb-2">99.7%</div>
          <div className="text-muted-foreground">Diagnostic Accuracy</div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;