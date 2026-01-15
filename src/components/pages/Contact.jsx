import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fale Comigo</h2>
          <p className="text-slate-400 text-lg">
            Tem uma pergunta ou proposta? Envie uma mensagem!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
              <Mail className="text-cyan-400 flex-shrink-0" size={24} />
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium">dev@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
              <Phone className="text-cyan-400 flex-shrink-0" size={24} />
              <div>
                <p className="text-slate-400 text-sm">Telefone</p>
                <p className="text-white font-medium">+55 (11) 9999-9999</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
              <MapPin className="text-cyan-400 flex-shrink-0" size={24} />
              <div>
                <p className="text-slate-400 text-sm">Localização</p>
                <p className="text-white font-medium">São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />

              <textarea
                name="message"
                placeholder="Sua Mensagem"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-6">
            Conecte-se comigo nas redes sociais
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="px-6 py-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              Twitter
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
