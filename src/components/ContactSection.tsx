import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Users, 
  GraduationCap, 
  Building, 
  Send,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  const collaborationTypes = [
    {
      icon: Users,
      title: "Researchers",
      description: "Join our global network of healthcare AI researchers and contribute to groundbreaking studies.",
      cta: "Join Research Network",
    },
    {
      icon: GraduationCap,
      title: "Students",
      description: "Access educational resources, internships, and mentorship in healthcare AI and supercomputing.",
      cta: "Explore Programs",
    },
    {
      icon: Building,
      title: "Healthcare Organizations",
      description: "Partner with us to implement AI solutions and transform patient care in your institution.",
      cta: "Schedule Consultation",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get Involved
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Shape the Future of Healthcare</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our mission to revolutionize healthcare through AI and supercomputing. 
            Whether you're a researcher, student, or healthcare professional, there's a place for you.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collaborationTypes.map((type, index) => (
            <Card key={index} className="shadow-card hover:shadow-medical transition-smooth group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-gradient-hero rounded-full mb-4 pulse-glow">
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {type.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/5 transition-smooth"
                >
                  {type.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medical">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Ready to collaborate? Send us a message and let's discuss how we can work together.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Role/Organization</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Research Scientist, Medical Student, Healthcare CTO"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your interests, ideas, or how you'd like to collaborate..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-hero text-white shadow-glow transition-bounce"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info & Newsletter */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Stay Updated</CardTitle>
                <p className="text-muted-foreground">
                  Get the latest news on healthcare AI breakthroughs and research opportunities.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button className="bg-secondary text-white hover:bg-secondary/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Monthly newsletter • No spam • Unsubscribe anytime
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Follow Our Research</CardTitle>
                <p className="text-muted-foreground">
                  Connect with us on social media and professional networks.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary/5">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary/5">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary/5">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card bg-gradient-subtle">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">2,500+</div>
                    <div className="text-sm text-muted-foreground">Researchers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">450+</div>
                    <div className="text-sm text-muted-foreground">Institutions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;