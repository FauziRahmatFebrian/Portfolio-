
import { useState, useEffect } from 'react';
import { Database, BarChart3, Brain, FileSpreadsheet, Zap, Target } from 'lucide-react';

const InteractiveSkills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      name: 'Data Analysis',
      icon: BarChart3,
      description: 'Analisis data mendalam untuk insight bisnis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Database Management',
      icon: Database,
      description: 'Pengelolaan database yang efisien dan optimal',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Business Intelligence',
      icon: Brain,
      description: 'Transformasi data menjadi strategi bisnis',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Excel & Spreadsheet',
      icon: FileSpreadsheet,
      description: 'Mahir dalam pemodelan dan analisis data',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Data Visualization',
      icon: Zap,
      description: 'Visualisasi data yang menarik dan informatif',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Strategic Planning',
      icon: Target,
      description: 'Perencanaan strategis berbasis data',
      color: 'from-indigo-500 to-blue-500'
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Keahlian <span className="text-primary">Profesional</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise dalam pengelolaan dan analisis data
          </p>
        </div>

        {/* Interactive Skills Spheres with closer spacing */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-square">
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 150; // Reduced from 200 to bring spheres closer
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              const Icon = skill.icon;
              
              return (
                <div
                  key={skill.name}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
                    hoveredSkill === index ? 'z-[9999]' : 'z-10'
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translate(${x + mousePosition.x * 15}px, ${y + mousePosition.y * 15}px)`,
                    transition: 'all 0.3s ease-out'
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Sphere */}
                  <div className={`
                    w-20 h-20 md:w-28 md:h-28 rounded-full 
                    bg-gradient-to-br ${skill.color} 
                    flex items-center justify-center
                    shadow-2xl shadow-primary/20
                    transform transition-all duration-300
                    ${hoveredSkill === index ? 'scale-125 shadow-primary/40' : 'hover:scale-110'}
                    animate-float
                    glass-effect
                  `}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    transform: hoveredSkill === index ? 'scale(1.25) rotateY(180deg)' : undefined
                  }}>
                    <Icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>

                  {/* Skill Info - Always on top with highest z-index */}
                  <div className={`
                    absolute top-full left-1/2 transform -translate-x-1/2 mt-4
                    bg-card/95 backdrop-blur-sm rounded-lg p-4 min-w-[200px] text-center
                    border border-primary/20 shadow-xl
                    transition-all duration-300
                    z-[10000]
                    ${hoveredSkill === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}>
                    <h3 className="font-bold text-primary mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>

                  {/* Connecting Lines */}
                  <div className={`
                    absolute top-1/2 left-1/2 w-1 bg-primary/30 origin-center
                    transition-all duration-300
                    ${hoveredSkill === index ? 'opacity-100' : 'opacity-20'}
                  `}
                  style={{
                    height: `${radius}px`,
                    transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  }} />
                </div>
              );
            })}

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 glass-effect flex items-center justify-center animate-glow">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="glass-effect rounded-lg p-6 hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
