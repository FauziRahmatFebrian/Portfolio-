
import { Database, BarChart3, FileSpreadsheet, TrendingUp, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Database,
      title: "Database Management",
      description: "MySQL, PostgreSQL, MongoDB",
      level: 90
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Statistical Analysis, Data Mining",
      level: 95
    },
    {
      icon: FileSpreadsheet,
      title: "Business Intelligence",
      description: "Dashboard Creation, Reporting",
      level: 88
    },
    {
      icon: TrendingUp,
      title: "Data Visualization",
      description: "Charts, Graphs, Interactive Dashboards",
      level: 92
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Predictive Modeling, AI Implementation",
      level: 85
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "ETL Processes, Data Pipelines",
      level: 87
    }
  ];

  const tools = [
    {
      name: "Microsoft Excel",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
      description: "Advanced Excel for data analysis"
    },
    {
      name: "Power BI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      description: "Business Intelligence & Visualization"
    },
    {
      name: "Python",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&h=200&fit=crop",
      description: "Data Science & Machine Learning"
    },
    {
      name: "R Programming",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop",
      description: "Statistical Analysis & Modeling"
    },
    {
      name: "SQL Server",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&h=200&fit=crop",
      description: "Database Management & Queries"
    },
    {
      name: "Tableau",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
      description: "Advanced Data Visualization"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Keahlian <span className="text-primary">Saya</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spesialisasi dalam pengelolaan data, analisis bisnis, dan pengembangan solusi 
            berbasis data untuk mendukung pengambilan keputusan strategis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="group p-6 glass-effect rounded-2xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <skill.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2 + 0.5}s`
                  }}
                ></div>
              </div>
              <div className="text-right text-sm text-primary font-semibold mt-1">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Tools & <span className="text-primary">Software</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Software dan tools yang saya gunakan untuk analisis dan pengelolaan data
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="group p-4 glass-effect rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
