
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
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
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with ❤️ and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
