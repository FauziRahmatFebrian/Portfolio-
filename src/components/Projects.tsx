
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Finance Admin",
      description: "Membuat laporan keuangan mingguan dan bulanan, mencatat arus kas harian secara akurat, serta mengembangkan sistem pelaporan sederhana yang meningkatkan efisiensi pengecekan transaksi hingga 20%.",
      tech: ["Excel", "Financial Analysis", "Data Management", "Reporting"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Website Developer BEM FISIP UPNVJ",
      description: "Membangun dan mengelola website menggunakan HTML, CSS, dan PHP dengan fokus pada desain responsif, struktur kode yang rapi, dan tampilan antarmuka yang ramah pengguna.",
      tech: ["HTML", "CSS", "PHP", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "https://github.com/FauziRahmatFebrian/landing_page.git",
      live: "#"
    },
    {
      title: "Website Developer Portfolio Pribadi",
      description: "Web Developer spesialis React JS, membangun UI dinamis dengan Redux & Tailwind CSS. Saya mengintegrasikan Google Gemini API untuk menciptakan fitur AI inovatif. Dengan pemahaman backend Node.js, saya siap mengembangkan solusi web cerdas yang efisien.",
      tech: ["React", "Redux", "Tailwind CSS", "Gemini API"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Scrapping Data",
      description: "Proyek ini berfokus pada pengambilan data dari situs web menggunakan bahasa pemrograman Python. Data yang berhasil dikumpulkan kemudian diolah dan digunakan untuk analisis lanjutan.",
      tech: ["Python", "Web Scraping", "Data Processing", "Analysis"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Power BI Dashboard",
      description: "Membangun dashboard Power BI dari data keuangan mentah. Menganalisis metrik kunci (laba rugi, arus kas) dengan Power Query & DAX untuk wawasan strategis dan pelacakan KPI secara real-time.",
      tech: ["Power BI", "Power Query", "DAX", "Financial Analysis"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "UI/UX Design Auto Lux Car",
      description: "Proyek UI/UX ini melibatkan proses perancangan antarmuka aplikasi menggunakan tools seperti Figma. Saya membuat wireframe, user flow, hingga prototype interaktif yang berfokus pada pengalaman pengguna (user experience) dan estetika visual.",
      tech: ["Figma", "UI/UX Design", "User Flow", "Prototype"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "UI/UX Forum Aduan Kekerasan",
      description: "UI/UX saya merancang solusi dengan empati. Melalui riset, wireframing, & testing, saya menciptakan pengalaman pengguna yang intuitif dan menjawab kebutuhan nyata pengguna.",
      tech: ["Figma", "User Research", "Wireframing", "User Testing"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      github: "#",
      live: "https://www.figma.com/proto/bZco3VKbzsyQA1BJyMHKAR/mockup?node-id=345-838&p=f&t=aYqDap3mh9FDZWBY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=345%3A838&show-proto-sidebar=1"
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
