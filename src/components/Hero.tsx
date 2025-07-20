
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const names = ["Fauzi", "Rahmat", "Febrian"];
  const roles = [
    "Data Analyst",
    "Data Manager", 
    "Business Intelligence"
  ];

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

  // Animasi pergantian nama setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Animasi pergantian role
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    // Create vCard format for contact
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Fauzi Rahmat Febrian
TEL:+6283875922134
EMAIL:fauzifebri428@gmail.com
URL:https://www.linkedin.com/in/fauzirf27
URL:https://github.com/FauziRahmatFebrian
NOTE:Data Analyst - Mahasiswa Ilmu Informasi UPN Veteran Jakarta
END:VCARD`;

    // Create blob and download link
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Fauzi_Rahmat_Febrian_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
      <div className="text-center z-10 px-4 w-full max-w-4xl mx-auto">
        {/* Profile Photo - centered */}
        <div className="mb-8 mt-12 animate-slide-up flex justify-center items-center w-full">
          <div className="relative flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 animate-glow mx-auto">
              <img 
                src="/lovable-uploads/94184024-5eed-4dc3-8890-a565d8c44543.png"
                alt="Profile Photo"
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text tracking-tight">
            Hi, I'm <span 
              key={currentNameIndex}
              className="text-primary animate-slide-right"
            >
              {names[currentNameIndex]}
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 flex items-center justify-center overflow-hidden">
            <span 
              key={currentRoleIndex}
              className="inline-block text-primary font-semibold animate-slide-right"
            >
              {roles[currentRoleIndex]}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <a 
            href="https://drive.google.com/file/d/11sVaQTwo0nD9QZh8piBRuu1auHXFUhgt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Lihat Resume Saya
          </a>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105"
          >
            Hubungi Saya
          </button>
        </div>

        {/* social media links and chevron down */}
        <div className="flex justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '1.4s' }}>
          <a href="https://github.com/FauziRahmatFebrian" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/fauzirf27" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a href="mailto:fauzifebri428@gmail.com" className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
            <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-primary opacity-70" />
        </div>
      </div>

      {/* floating dots */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
