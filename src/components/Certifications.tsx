
import { Award, Calendar, Building2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Certifications = () => {
  const certifications = [
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

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Sertifikasi <span className="text-primary">& Penghargaan</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koleksi sertifikat dan penghargaan yang telah saya peroleh dalam berbagai bidang dan kegiatan
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group p-1">
                    <div className="glass-effect rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
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
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
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

                        <p className="text-sm text-muted-foreground line-clamp-2">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Sertifikat Diperoleh</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Institusi Berbeda</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:bg-primary/5 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Terakhir Diperoleh</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
