import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle } from 'lucide-react';

const ChatAI = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya adalah AI assistant yang dapat menjawab pertanyaan tentang profil Fauzi Rahmat Febrian. Apa yang ingin Anda ketahui?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Your API key - embedded directly in the component
  const apiKey = 'AIzaSyBEhuZ0W1BpD3Vf6jj0TNQMSvkPEd_DgiY';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const profileInfo = `
  Nama: Fauzi Rahmat Febrian
  Profesi: Data Analyst, Data Manager, Business Intelligence, Product Manager
  Pendidikan: Mahasiswa S1 Sains Informasi semester 4 di Universitas Pembangunan Nasional "Veteran" Jakarta (2023 - Sekarang)
  IPK: 3.75/4.00
  Keahlian: R, Python, SQL, Excel, Power BI, Tableau, Data Analysis, Statistical Analysis, Data Mining, Machine Learning, Product Management
  Pengalaman Kerja: Finance Admin di seeouo.id (2024-2025)
  Lokasi: Jakarta, Indonesia
  Email: fauzifebri428@gmail.com
  GitHub: https://github.com/FauziRahmatFebrian
  LinkedIn: https://www.linkedin.com/in/fauzirf27
  
  Pendidikan Formal:
  - S1 Sains Informasi, Universitas Pembangunan Nasional "Veteran" Jakarta (2023 - Sekarang) - IPK: 3.75/4.00, Semester 4, Fokus pada Data Science dan Information Systems
  - SMA, MAN 21 Jakarta Utara (2020 - 2023) - Jurusan IPA
  
  Pengalaman Kerja:
  - Finance Admin di seeouo.id (2024-2025): Mengelola pembukuan keuangan dan laporan bulanan, analisis data keuangan, menggunakan Excel dan sistem ERP untuk tracking budget dan expenses, kolaborasi dengan tim finance untuk reconciliation dan audit
  
  Sertifikat dan Kualifikasi:
  - AI Ignition Training - From Basics to Breakthroughs in AI (KUMPUL.ID, Juli 2025)
  - Top Venturer UPNVJ (Wadhwani Foundation, April 2024)
  - DSF 37 - Product Management (Dibimbing.id, 2025)
  - The Complete Data Analyst Bootcamp From Basics To Advanced (Udemy, Juli 2025)
  - Python in Action: A Practical Course 50+ Real-World Projects (Udemy, Juli 2025)
  - Staff Mentor - Hello FISIP 2024 (BEM FISIP UPNVJ, September 2024)
  - Workshop Ngoding dan Design (HIMASIFO FISIP UPNVJ, Mei 2025)
  - Panitia SIGNAL 2.0 (HIMASIFO, September 2024)
  - Coding for Data Course (SoloLearn, Februari 2024)
  - User Experience Course (Dibimbing.id, Mei 2025)
  - Gomawo Fest 2023 Participant (Beasiswakorea.com, September 2023)
  
  Proyek Terbaru:
  - Finance Admin Dashboard: Sistem pelaporan keuangan dengan Excel dan analisis data
  - Power BI Dashboard: Dashboard analisis keuangan dengan Power Query & DAX
  - Data Scraping Project: Pengambilan data menggunakan Python untuk analisis
  - Website BEM FISIP UPNVJ: Pengembangan website dengan HTML, CSS, PHP
  - Portfolio Website: Website portfolio dengan React, Redux, Tailwind CSS, dan Gemini API
  - UI/UX Design Auto Lux Car: Desain antarmuka aplikasi dengan Figma
  - UI/UX Forum Aduan Kekerasan UPNVJ: Desain sistem pelaporan dengan fokus UX
  
  Kursus Tambahan:
  - Data Analysis with Python
  - SQL for Data Science
  - R Programming Fundamentals
  - Statistical Analysis Basics
  - Data Visualization Techniques
  
  Deskripsi: Mahasiswa S1 Sains Informasi semester 4 di Universitas Pembangunan Nasional "Veteran" Jakarta yang mengkhususkan diri dalam analisis data dan product management dengan keterampilan terbukti dalam R, Python, dan SQL untuk mengumpulkan, memproses, dan menganalisis data. Berpengalaman sebagai Finance Admin di seeouo.id dengan fokus pada analisis data keuangan. Bersemangat mengubah data menjadi wawasan yang dapat ditindaklanjuti untuk mendukung pengambilan keputusan bisnis dan pengembangan produk.
  `;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      console.log('Sending request to Gemini API...');
      
      const requestBody = {
        contents: [{
          parts: [{
            text: `Kamu adalah AI assistant yang membantu menjawab pertanyaan tentang profil Fauzi Rahmat Febrian. Berikut informasi lengkap tentang dia: ${profileInfo}. 
            
            Pertanyaan: ${userMessage}
            
            Jawab dengan ramah dan informatif dalam bahasa Indonesia. Fokus pada informasi yang tersedia tentang Fauzi. Jika pertanyaan tidak terkait dengan profil Fauzi, beri tahu bahwa kamu hanya bisa menjawab pertanyaan tentang profil Fauzi.`
          }]
        }]
      };

      console.log('Request body:', requestBody);

      // Updated to use the correct model name
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!aiResponse) {
        console.error('No response text found in API response');
        throw new Error('No response from AI');
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi dalam beberapa saat.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Chat <span className="text-primary">AI</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tanya apa saja tentang profil saya! AI assistant ini akan membantu menjawab pertanyaan Anda.
          </p>
        </div>

        <div className="glass-effect rounded-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-primary/20 bg-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Profile Assistant</h3>
                <p className="text-sm text-muted-foreground">Tanya tentang Fauzi Rahmat Febrian</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' ? 'bg-primary text-black' : 'bg-muted'
                }`}>
                  {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-primary text-black ml-auto' 
                    : 'bg-muted'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tanya tentang profil Fauzi..."
                className="flex-1 px-4 py-2 bg-muted rounded-full border border-primary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-primary text-black rounded-full hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAI;
