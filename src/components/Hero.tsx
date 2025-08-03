import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-in slide-in-from-top duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-red mb-6 leading-tight">
            Hi, I'm Dishita 
            <span className="animate-float inline-block">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-black mb-8 font-light">
            Creating Digital Experiences That Matter
          </h2>
          <p className="text-lg text-portfolio-black/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate web developer who crafts beautiful, functional, and user-focused 
            digital experiences using modern technologies and creative problem-solving.
          </p>
        </div>
        
        <div className="animate-in slide-in-from-bottom duration-1000 delay-300 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects"><Button variant="portfolio" size="xl" className="group">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button></a>
           <a href="#contact"> <Button variant="portfolio-outline" size="xl">
              Get In Touch
            </Button></a>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            
            <a 
              href="#" 
              className="text-portfolio-black hover:text-portfolio-red transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-portfolio-black hover:text-portfolio-red transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;