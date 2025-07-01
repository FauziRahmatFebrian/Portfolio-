
import { GraduationCap, School, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "S1 Sains Informasi",
      institution: "Universitas Indonesia",
      period: "2023 - Sekarang",
      description: "Mengkhususkan diri dalam analisis data dengan fokus pada penggunaan R, Python, dan SQL untuk pemrosesan dan analisis data",
      achievements: ["IPK: 3.75/4.00", "Semester 4", "Fokus pada Data Science dan Information Systems"],
      icon: GraduationCap
    },
    {
      degree: "SMA",
      institution: "MAN 21 Jakarta Utara",
      period: "2020 - 2023",
      description: "Jurusan IPA dengan fokus pada Matematika dan Sains sebagai dasar untuk studi lanjutan di bidang teknologi informasi",
      achievements: ["Lulusan dengan prestasi baik", "Aktif dalam kegiatan akademik"],
      icon: School
    }
  ];

  const certifications = [
    "Data Analysis with Python",
    "SQL for Data Science",
    "R Programming Fundamentals",
    "Statistical Analysis Basics",
    "Data Visualization Techniques"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Pendidikan <span className="text-primary">Saya</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perjalanan akademik yang solid dalam bidang sains informasi dan data science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 hidden md:block"></div>
          
          {education.map((edu, index) => (
            <div 
              key={edu.degree}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'} animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
              
              <div className={`glass-effect rounded-2xl p-6 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group ${index % 2 === 0 ? 'md:mr-8' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-semibold">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-3 font-semibold">
                      {edu.institution}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Keterampilan & <span className="text-primary">Sertifikasi</span>
            </h3>
            <p className="text-muted-foreground">
              Keterampilan dan sertifikasi yang mendukung keahlian dalam analisis data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert}
                className="p-4 glass-effect rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
