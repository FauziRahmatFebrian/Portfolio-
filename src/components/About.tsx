
import { BarChart3, Database, TrendingUp, Brain } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.2 });

  const skills = [
    { icon: BarChart3, title: "Data Analysis", desc: "Statistical Analysis, Data Mining, Insights" },
    { icon: Database, title: "Data Management", desc: "SQL, Data Warehousing, ETL Processes" },
    { icon: TrendingUp, title: "Data Visualization", desc: "Dashboard Creation, Charts, Reporting" },
    { icon: Brain, title: "Predictive Analytics", desc: "Machine Learning, Forecasting Models" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Saya adalah mahasiswa Ilmu Informasi semester 4 yang mengkhususkan diri dalam analisis data, 
              dengan keterampilan yang terbukti dalam R, Python, dan SQL untuk mengumpulkan, memproses, dan menganalisis data.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Saya bersemangat untuk mengubah data menjadi wawasan yang dapat ditindaklanjuti untuk mendukung pengambilan keputusan 
              dan terus meningkatkan kemampuan teknis dan analitis saya untuk memecahkan tantangan data yang kompleks. 
              Dengan fokus pada data analysis, saya memiliki pengalaman dalam menggunakan berbagai tools 
              seperti Excel, Power BI, dan Tableau untuk menciptakan visualisasi data yang informatif dan dashboard interaktif.
            </p>

            <div className="pt-6">
              <a 
                href="https://drive.google.com/file/d/11sVaQTwo0nD9QZh8piBRuu1auHXFUhgt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-105 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div 
            ref={skillsRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 ease-out delay-400 ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className={`group p-6 glass-effect rounded-2xl hover:bg-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                  skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: skillsVisible ? `${600 + index * 100}ms` : '0ms',
                  transitionDuration: '800ms'
                }}
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
