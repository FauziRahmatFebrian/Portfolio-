
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Finance Admin",
      company: "PT. Data Solutions",
      period: "2024 - 2025",
      location: "Jakarta, Indonesia",
      description: [
        "Mengelola pembukuan keuangan dan laporan bulanan perusahaan",
        "Melakukan analisis data keuangan untuk mendukung pengambilan keputusan",
        "Menggunakan Excel dan sistem ERP untuk tracking budget dan expenses",
        "Berkolaborasi dengan tim finance untuk proses reconciliation dan audit"
      ],
      skills: ["Excel", "Financial Analysis", "Data Management", "ERP Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Pengalaman <span className="text-primary">Kerja</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman profesional yang telah membentuk keahlian saya dalam bidang keuangan dan analisis data
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className="group p-8 glass-effect rounded-2xl hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Icon and basic info */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold mb-4">
                    {experience.company}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
