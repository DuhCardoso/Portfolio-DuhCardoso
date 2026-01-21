import Profile from "./Component/Profile";
import CardsContainer from "./Component/CardsContainer";

const About = () => {
  return (
    <section id="About" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className="text-center mb-16"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div
            className="underlineTitle"
            data-aos="fade-up"
            data-aos-duration="800"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Profile */}
          <Profile />

          {/* Right - Description */}
          <div>
            <p
              className="text-lg text-slate-300 mb-6 leading-relaxed opacity-90"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <span className="font-bold">
                Olá! Sou Eduardo Cardoso (DuhCardoso).
              </span>{" "}
              Sou desenvolvedor web, dedicado e comprometido com a minha área de
              atuação. Atualmente, estou focado em aprimorar continuamente meus
              conhecimentos em
              <span className="font-bold"> Front-end</span> e{" "}
              <span className="font-bold">Back-end</span>, sempre com empenho,
              curiosidade e paixão por tecnologia
            </p>

            <p
              className="text-lg text-slate-300 mb-8 leading-relaxed opacity-90"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              Sou uma pessoa dedicada e em constante aprendizado na área de
              tecnologia. Tenho boa comunicação, gosto de trabalhar em equipe e
              também consigo atuar de forma independente. Busco transformar
              ideias em soluções simples e funcionais, com atenção à experiência
              do usuário, código organizado e boas práticas de desenvolvimento.
            </p>

            {/* Cards */}
            <CardsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
