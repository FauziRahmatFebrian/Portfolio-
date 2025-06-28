
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground">
            © 2024 John Doe. Dibuat dengan ❤️ dan banyak ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Dirancang & Dikembangkan dengan React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
