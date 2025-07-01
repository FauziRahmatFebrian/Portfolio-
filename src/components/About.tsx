
import { Database, BarChart3, TrendingUp, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Database, title: "Data Management", desc: "MySQL, PostgreSQL, MongoDB" },
    { icon: BarChart3, title: "Data Analysis", desc: "Statistical Analysis, R, Python" },
    { icon: TrendingUp, title: "Business Intelligence", desc: "Power BI, Tableau, Reporting" },
    { icon: Brain, title: "Machine Learning", desc: "Predictive Modeling, AI" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Saya adalah mahasiswa Ilmu Informasi semester 4 yang mengkhususkan diri dalam analisis data, 
              dengan keterampilan yang terbukti dalam R, Python, dan SQL untuk mengumpulkan, memproses, dan menganalisis data.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Saya bersemangat untuk mengubah data menjadi wawasan yang dapat ditindaklanjuti untuk mendukung pengambilan keputusan 
              dan terus meningkatkan kemampuan teknis dan analitis saya untuk memecahkan tantangan data yang kompleks.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Ketika tidak menganalisis data, Anda akan menemukan saya menjelajahi teknologi baru, 
              berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas developer dan data analyst.
            </p>

            <div className="pt-6">
              <button className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="group p-6 glass-effect rounded-2xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
