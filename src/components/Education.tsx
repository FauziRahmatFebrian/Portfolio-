
import { GraduationCap, School, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Data Science",
      institution: "Universitas Indonesia",
      period: "2020 - 2022",
      description: "Spesialisasi dalam Machine Learning, Big Data Analytics, dan Statistical Modeling",
      achievements: ["IPK: 3.85/4.00", "Thesis: Predictive Analytics for Business Intelligence"],
      icon: Award
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Institut Teknologi Bandung",
      period: "2016 - 2020",
      description: "Fokus pada Database Systems, Software Engineering, dan Data Structures",
      achievements: ["IPK: 3.72/4.00", "Cum Laude Graduate", "Best Final Project Award"],
      icon: GraduationCap
    },
    {
      degree: "SMA Negeri 1 Jakarta",
      institution: "Jurusan IPA",
      period: "2013 - 2016",
      description: "Fokus pada Matematika, Fisika, dan Kimia dengan prestasi akademik yang konsisten",
      achievements: ["Ranking 3 Terbaik", "Olimpiade Matematika Tingkat Provinsi"],
      icon: School
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure Data Scientist Associate",
    "Google Cloud Professional Data Engineer",
    "Tableau Desktop Specialist",
    "IBM Data Science Professional Certificate",
    "AWS Certified Machine Learning - Specialty"
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
            Perjalanan akademik yang solid dalam bidang teknologi informasi dan data science
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
              Sertifikasi <span className="text-primary">Profesional</span>
            </h3>
            <p className="text-muted-foreground">
              Sertifikasi yang mendukung keahlian profesional saya
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
