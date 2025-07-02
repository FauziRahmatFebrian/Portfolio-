
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: "Development", desc: "React, Node.js, TypeScript" },
    { icon: Palette, title: "Design", desc: "UI/UX, Figma, Adobe Suite" },
    { icon: Zap, title: "Performance", desc: "Optimization, SEO, Speed" },
    { icon: Heart, title: "Passion", desc: "Clean Code, Innovation" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that make a difference. My journey started 
              with curiosity about how things work, and it's evolved into a love 
              for crafting beautiful, functional experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community. I believe in writing clean, maintainable 
              code that stands the test of time.
            </p>

            <div className="pt-6">
              <button className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="group p-6 glass-effect rounded-2xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
