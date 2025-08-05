import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-portfolio-red" />,
      title: "Frontend Development",
      description: "Wordpress, React, Tailwind CSS, Next.js"
    },
    {
      icon: <Palette className="w-8 h-8 text-portfolio-red" />,
      title: "UI/UX Design",
      description: "Canva, Figma, Adobe Creative Suite, Responsive Design"
    },
    {
      icon: <Zap className="w-8 h-8 text-portfolio-red" />,
      title: "Performance",
      description: "Optimization, SEO, Accessibility, Best Practices"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-red mb-6">
            About Me
          </h2>
          <p className="text-xl text-portfolio-black max-w-3xl mx-auto leading-relaxed">
            With a passion for clean code and beautiful design, I transform ideas into 
            engaging digital experiences that users love and businesses trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-portfolio-red mb-6">My Journey</h3>
            <p className="text-portfolio-black mb-4 leading-relaxed">
              I started my journey in web development with a curiosity for how things work 
              on the internet. What began as a hobby quickly grew into a passion for creating 
              digital solutions that make a difference.
            </p>
            <p className="text-portfolio-black leading-relaxed">
              Today, I specialize in modern web technologies and focus on building applications 
              that are not only visually appealing but also performant, accessible, and user-friendly.
            </p>
          </div>
          <div className="bg-portfolio-cream p-8 rounded-lg">
            <h4 className="text-xl font-bold text-portfolio-red mb-4">Key Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-portfolio-black">Projects Completed</span>
                <span className="font-bold text-portfolio-red">30+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-black">Years Experience</span>
                <span className="font-bold text-portfolio-red">2+</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-portfolio-cream p-8 rounded-lg text-center hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-portfolio-red mb-3">
                {skill.title}
              </h4>
              <p className="text-portfolio-black">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;