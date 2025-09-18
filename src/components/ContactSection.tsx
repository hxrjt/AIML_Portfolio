import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      username: "@alexchen"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      username: "Alex Chen"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      username: "@alexchen_ai"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss AI/ML opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glass animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button className="btn-hero w-full py-3">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Information */}
            <Card className="card-glass mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-accent mr-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Follow Me</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-accent mr-4">
                        <social.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {social.label}
                        </p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground text-center">
                    Open to collaborations and interesting projects
                  </p>
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