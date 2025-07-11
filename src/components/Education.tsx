import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: educationRef, isVisible: educationVisible } = useScrollReveal({ threshold: 0.2 });

  const education = [
    {
      degree: "S1 Sains Informasi",
      institution: "Universitas Pembangunan Nasional \"Veteran\" Jakarta",
      period: "2023 - Sekarang",
      location: "Jakarta, Indonesia",
      description: [
        "Mengkhususkan diri dalam analisis data dengan fokus pada penggunaan R, Python, dan SQL untuk pemrosesan dan analisis data",
        "Aktif dalam kegiatan akademik dan organisasi mahasiswa",
        "Mendalami bidang Data Science dan Information Systems",
        "Mengembangkan kemampuan dalam statistical analysis dan data visualization"
      ],
      achievements: ["IPK: 3.75/4.00", "Semester 4", "Fokus pada Data Science dan Information Systems"],
      icon: GraduationCap
    },
    {
      degree: "SMA",
      institution: "MAN 21 Jakarta Utara",
      period: "2020 - 2023",
      location: "Jakarta Utara, Indonesia",
      description: [
        "Jurusan IPA dengan fokus pada Matematika dan Sains sebagai dasar untuk studi lanjutan di bidang teknologi informasi",
        "Aktif dalam kegiatan ekstrakurikuler dan kompetisi akademik",
        "Mengembangkan fondasi yang kuat dalam bidang sains dan teknologi",
        "Mempersiapkan diri untuk pendidikan tinggi di bidang teknologi informasi"
      ],
      achievements: ["Lulusan dengan prestasi baik", "Aktif dalam kegiatan akademik"],
      icon: School
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Pendidikan <span className="text-primary">Saya</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perjalanan akademik yang solid dalam bidang sains informasi dan data science
          </p>
        </div>

        <div 
          ref={educationRef}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <div 
              key={edu.degree}
              className={`group p-8 glass-effect rounded-2xl hover:bg-primary/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 ${
                educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ 
                transitionDelay: educationVisible ? `${index * 200}ms` : '0ms',
                transitionDuration: '800ms'
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Icon and basic info */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <edu.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold mb-4">
                    {edu.institution}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {achievement}
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

export default Education;
