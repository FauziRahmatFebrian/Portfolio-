
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard untuk analisis data penjualan dengan visualisasi real-time menggunakan Python dan Streamlit. Dilengkapi dengan fitur filtering dan prediksi tren.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Analisis segmentasi pelanggan menggunakan algoritma clustering K-means untuk membantu strategi pemasaran yang lebih efektif.",
      tech: ["R", "SQL", "ggplot2", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Database Management System",
      description: "Sistem manajemen database untuk inventory management dengan query optimization dan reporting otomatis menggunakan SQL dan Python.",
      tech: ["SQL", "Python", "PostgreSQL", "Tableau"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa project terbaru saya yang menunjukkan kemampuan dalam analisis data dan pengembangan solusi berbasis data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
