
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
    const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
    const mailtoLink = `mailto:fauzifebri428@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Hubungi <span className="text-primary">Saya</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi dalam proyek analisis data? Mari kita diskusikan bagaimana saya dapat membantu Anda mengubah data menjadi insights yang berharga.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">fauzifebri428@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/6283875922134" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    0838 7592 2134
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Lokasi</h3>
                  <p className="text-muted-foreground">Bekasi Utara, Jawa Barat</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Mari Terhubung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Saya selalu tertarik untuk mengerjakan proyek-proyek baru dan berkolaborasi 
                dengan orang-orang hebat. Apakah Anda memiliki proyek analisis data yang spesifik 
                atau hanya ingin berdiskusi tentang data science, jangan ragu untuk menghubungi saya!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nama Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="email.anda@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
