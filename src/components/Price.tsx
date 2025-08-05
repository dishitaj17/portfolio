import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Stater Plan",
      price: "₹5,000 - ₹8,000",
      description: "For Individuals or Small Startups",
      features: [
        "1-Page Static Website(HTML/CSS/JS)",
        "Mobile Responsive Design",
        "Contact Form Integration",
        
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      price: "₹10,000 - ₹15,000",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Everything in Basic",
        "Upto 5 pages (Home, About, Services, Contact, Blog)",
        "Advanced SEO",
        "E-commerce Integration",
        "Mobile Responsive",
        "Contact + Inquiery Form"
        
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "₹18,000 - ₹30,000",
      description: "For E-commerce or Professional Sites requiring custom solutions",
      features: [
        "Everything in Professional",
        "Upto 10 Pages",
        "Custom Functionality",
        "API Integrations",
        "Admin Dashboard",
        "Fully Responsive",
        "Payment Integration + SEO Friendly",
        "Hosting & Domain Guidance"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services tailored to your business needs. 
            From simple portfolios to complex web applications.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-[var(--shadow-pricing)] hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-[var(--shadow-pricing)] scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ project</span>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-8">
                <Button 
                  size="lg" 
                  className="w-full text-base font-semibold"
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;