import React, { useEffect } from 'react';
import { Award, Calendar, Building2, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Certifications = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll every 3 seconds
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  const certifications = [
    {
      title: "AI Ignition Training - From Basics to Breakthroughs in AI",
      issuer: "KUMPUL.ID",
      date: "Juli 2025",
      image: "/lovable-uploads/0dd36fb9-3875-4adc-be84-565c780ad438.png",
      description: "Sertifikat partisipasi dalam program pelatihan AI Ignition dari dasar hingga terobosan dalam AI"
    },
    {
      title: "top venturer UPNVJ",
      issuer: "Wadhwani Foundation",
      date: "April 2024",
      image: "/lovable-uploads/176d9936-1300-4d05-ae00-f29ad66eb106.png",
      description: "Sertifikat penyelesaian program keterampilan kerja abad 21 tingkat lanjutan sebagai top participant venturer"
    },
    {
      title: "DSF 37 - Product Management",
      issuer: "Dibimbing.id",
      date: "2025",
      image: "/lovable-uploads/6d03bf86-8830-44c5-a38a-c9dd7af5bc81.png",
      description: "Sertifikat partisipasi dalam program DSF 37 - Product Management"
    },
    {
      title: "The Complete Data Analyst Bootcamp From Basics To Advanced",
      issuer: "Udemy",
      date: "Juli 2025",
      image: "/lovable-uploads/d44bcd15-5384-417c-98b3-532bb5c07665.png",
      description: "Sertifikat penyelesaian bootcamp data analyst lengkap dari dasar hingga lanjutan"
    },
    {
      title: "Python in Action: A Practical Course 50+ Real-World Projects",
      issuer: "Udemy",
      date: "Juli 2025",
      image: "/lovable-uploads/39ee7542-c51f-4f33-9179-a2573cf57865.png",
      description: "Sertifikat penyelesaian kursus Python praktis dengan 50+ proyek dunia nyata"
    },
    {
      title: "Staff Mentor - Hello FISIP 2024",
      issuer: "BEM FISIP UPNVJ",
      date: "September 2024",
      image: "/lovable-uploads/1ece700b-04be-4cfb-bb98-1c5412195d60.png",
      description: "Sertifikat apresiasi sebagai Staff Mentor dalam acara Hello FISIP 2024"
    },
    {
      title: "Workshop Ngoding dan Design",
      issuer: "HIMASIFO FISIP UPNVJ",
      date: "Mei 2025",
      image: "/lovable-uploads/b2418767-1d31-492e-898f-2df856588c66.png",
      description: "Sertifikat penghargaan sebagai narasumber workshop"
    },
    {
      title: "Panitia SIGNAL 2.0",
      issuer: "HIMASIFO",
      date: "September 2024",
      image: "/lovable-uploads/d311e588-aff7-448f-a1b1-723c175ff920.png",
      description: "Sertifikat penghargaan sebagai panitia dalam kegiatan SIGNAL 2.0"
    },
    {
      title: "Coding for Data Course",
      issuer: "SoloLearn",
      date: "Februari 2024",
      image: "/lovable-uploads/d2259387-6dbe-413f-92d3-3f66c6c8e91b.png",
      description: "Sertifikat penyelesaian kursus Coding for Data"
    },
    {
      title: "User Experience Course",
      issuer: "Dibimbing.id",
      date: "Mei 2025",
      image: "/lovable-uploads/73ea164b-6ac9-4c43-97ba-b70e21cabb02.png",
      description: "Sertifikat penyelesaian kursus Mengenal dan Memahami User Experience"
    },
    {
      title: "Gomawo Fest 2023 Participant",
      issuer: "Beasiswakorea.com",
      date: "September 2023",
      image: "/lovable-uploads/523cddc2-49e8-402b-b514-dfd9fd614496.png",
      description: "Sertifikat partisipasi dalam Education Fair to Study in South Korea"
    }
  ];

  const additionalCourses = [
    {
      title: "Data Analysis with Python",
      icon: User
    },
    {
      title: "SQL for Data Science",
      icon: User
    },
    {
      title: "R Programming Fundamentals",
      icon: User
    },
    {
      title: "Statistical Analysis Basics",
      icon: User
    },
    {
      title: "Data Visualization Techniques",
      icon: User
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Sertifikasi <span className="text-primary">& Penghargaan</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koleksi sertifikat dan penghargaan yang telah saya peroleh dalam berbagai bidang dan kegiatan
          </p>
        </div>

        <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group p-1 h-full">
                    <div className="glass-effect rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up h-full flex flex-col"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-h-0">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {cert.title}
                            </h3>
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Building2 className="w-4 h-4 mr-2 text-primary" />
                                {cert.issuer}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                {cert.date}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">11+</div>
            <div className="text-muted-foreground">Sertifikat Diperoleh</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Institusi Berbeda</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-muted-foreground">Terakhir Diperoleh</div>
          </div>
        </div>

        {/* Additional Courses Section */}
        <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Kursus Tambahan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalCourses.map((course, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-4 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] border border-primary/20 animate-slide-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <course.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {course.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
