
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import InteractiveSkills from '../components/InteractiveSkills';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import ChatAI from '../components/ChatAI';
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
        <InteractiveSkills />
        <Projects />
        <WorkExperience />
        <Education />
        <ChatAI />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
