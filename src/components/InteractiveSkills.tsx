
import { useState, useEffect } from 'react';
import { Database, BarChart3, Brain, FileSpreadsheet, Zap, Target, Code, Settings, Monitor, Globe } from 'lucide-react';

const InteractiveSkills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      name: 'HTML',
      icon: Code,
      position: { x: -250, y: -150 },
      color: 'text-orange-500'
    },
    {
      name: 'CSS',
      icon: Monitor,
      position: { x: -200, y: 100 },
      color: 'text-blue-500'
    },
    {
      name: 'JavaScript',
      icon: FileSpreadsheet,
      position: { x: 200, y: -100 },
      color: 'text-yellow-500'
    },
    {
      name: 'TypeScript',
      icon: Database,
      position: { x: 250, y: 50 },
      color: 'text-blue-600'
    },
    {
      name: 'React',
      icon: Settings,
      position: { x: -150, y: -250 },
      color: 'text-cyan-500'
    },
    {
      name: 'Node.js',
      icon: Brain,
      position: { x: -300, y: -50 },
      color: 'text-green-600'
    },
    {
      name: 'Python',
      icon: Zap,
      position: { x: 150, y: 200 },
      color: 'text-green-500'
    },
    {
      name: 'Database',
      icon: Target,
      position: { x: 300, y: -200 },
      color: 'text-purple-500'
    },
    {
      name: 'API',
      icon: Globe,
      position: { x: -100, y: 250 },
      color: 'text-indigo-500'
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      position: { x: 100, y: -250 },
      color: 'text-red-500'
    }
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

  return (
    <section id="skills" className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-b from-background to-card/10">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-center">
        
        {/* Skills Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* Central Skills Title */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-12 py-6 border border-primary/20 shadow-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-center glow-text">
                Skills
              </h2>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {skills.map((skill, index) => (
              <div
                key={`line-${index}`}
                className="absolute w-0.5 bg-primary/20 origin-center"
                style={{
                  width: '1px',
                  height: `${Math.sqrt(skill.position.x ** 2 + skill.position.y ** 2)}px`,
                  transform: `rotate(${Math.atan2(skill.position.y, skill.position.x) * 180 / Math.PI}deg)`,
                  transformOrigin: '0 0'
                }}
              />
            ))}
          </div>

          {/* Skill Icons */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div
                key={skill.name}
                className="absolute group cursor-pointer z-10"
                style={{
                  transform: `translate(-50%, -50%) translate(${skill.position.x + mousePosition.x * 10}px, ${skill.position.y + mousePosition.y * 10}px)`,
                  transition: 'all 0.3s ease-out',
                  left: '50%',
                  top: '50%'
                }}
              >
                {/* Skill Icon Container */}
                <div className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-2xl 
                  bg-card/90 backdrop-blur-sm
                  flex items-center justify-center
                  border border-primary/20
                  shadow-lg shadow-primary/10
                  transform transition-all duration-300
                  group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-primary/30
                  group-hover:border-primary/50
                  animate-float
                `}
                style={{
                  animationDelay: `${index * 0.5}s`
                }}>
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Skill Name Tooltip */}
                <div className={`
                  absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                  bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2
                  border border-primary/20 shadow-xl
                  transition-all duration-300
                  ${skill.name.length > 8 ? 'min-w-[120px]' : 'min-w-[80px]'} text-center
                  opacity-0 translate-y-2 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-y-0
                `}>
                  <p className="text-sm font-medium text-primary">{skill.name}</p>
                </div>
              </div>
            );
          })}

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
