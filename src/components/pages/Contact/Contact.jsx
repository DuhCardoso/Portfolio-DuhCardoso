import SocialLinks from "../../layout/SocialLinks";
import ContactFrom from "./components/ContactFrom";

const Contact = () => {
  return (
    <section id="Contact" className="py-20">
      <div
        className="max-w-7xl w-[90%] lg:w-[75%] mx-auto px-4 sm:px-6 lg:px-8 bg-slate-800/30 rounded-2xl"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {/* Title */}
        <div className="text-center mb-16 pt-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Fale Comigo
          </h2>
          <div data-aos="fade-up" data-aos-duration="1100">
            <p className="text-slate-400 text-lg mb-4">
              Tem uma pergunta ou proposta? Envie uma mensagem!
            </p>
            <div className="underlineTitle"></div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactFrom />

        {/* Social Links */}
        <div className="text-center pt-8 border-t border-slate-700">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-slate-400 text-lg mb-6">
              Conecte-se comigo por outros meios!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
