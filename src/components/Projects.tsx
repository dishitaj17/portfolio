import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Venzoraa Jewllery E-commerce Platform",
      description: "A modern e-commerce solution built with Wordpress. featuring real-time inventory management and secure payment processing.",
      tech: ["Wordpress", "Woo-commerce"],
      image: "https://venzoraa.in/wp-content/uploads/2024/01/1.jpg",
      liveUrl: "https://venzoraa.in/",
      
    },
    {
      title: "Bharad School, Rajkot",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Wordpress"],
      image: "https://bharadschools.org/wp-content/uploads/2023/04/banner-02.jpg",
      liveUrl: "https://bharadschools.org/",
      
    },
    {
      title: "Papad - Small Scale Bussiness ",
      description: "A responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      tech: ["React Js" , "CSS3" ,"JavaScript"],
      image: "https://papad.netlify.app/assets/hero-papad-CfBQTH2J.jpg",
      liveUrl: "https://papad.netlify.app/",
      
    },
     {
      title: "Spectra - Singapore",
      description: "A responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      tech: ["React Js" , "JavaScript", 'Bootstrap'],
      image: "https://staging.spectra.com.sg/wp-content/uploads/2024/03/Untitled-1.jpg",
      liveUrl: "https://spectra.com.sg/",
      
    },
     {
      title: "FFC - Agrochemical Products",
      description: "A responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      tech: ["React Js" , "CSS3" ,"JavaScript"],
      image: "https://ffcpl.in/wp-content/uploads/2024/11/hero-1.jpg",
      liveUrl: "https://ffcpl.in/",
      
    }
  ];

  return (
    <section className="py-20 px-4 bg-portfolio-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-red mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-portfolio-black max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development 
            and design. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-red/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full text-portfolio-red hover:bg-portfolio-red hover:text-white transition-colors duration-300"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                   
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-red mb-3">
                  {project.title}
                </h3>
                <p className="text-portfolio-black mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-cream text-portfolio-black text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;