
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            top: '20%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            top: '60%',
            right: '15%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full bg-primary/8 blur-xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 80}px, ${mousePosition.y * 80}px)`,
            bottom: '20%',
            left: '60%',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text tracking-tight">
            Hi, I'm <span className="text-primary">John</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-6">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer
            </span>
            <span className="mx-4 text-primary">•</span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
              UI/UX Designer
            </span>
            <span className="mx-4 text-primary">•</span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.6s' }}>
              Creative Thinker
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
          I create stunning digital experiences that blend cutting-edge technology 
          with beautiful design. Let's build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <button className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-primary opacity-70" />
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
