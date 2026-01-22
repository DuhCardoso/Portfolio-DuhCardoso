import { useState } from "react";

import SecundaryButton from "../../../../layout/SecundaryButton";
import ProjectCard from "./Component/ProjectCard";

const Portfolio = () => {
  const [seeMore, setSeeMore] = useState(false);

  const projects = [
    {
      id: 1,
      title: "SaaS Pro",
      description:
        "Plataforma de mock interviews em tempo real com IA. Conversas naturais e personalizadas para praticar entrevistas.",
      tech: ["React", "Tailwind CSS", "Node"],
      image: "/SaasPro.png",
      liveUrl: "https://saas-pro-product.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso",
    },
    {
      id: 2,
      title: "Lista De Chamada",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["React", "Node", "CSS3"],
      image: "/ListaDeChamda.png",
      liveUrl: "https://lista-de-chamada-eight.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso",
    },
    {
      id: 3,
      title: "Secret Word",
      description:
        "Plataforma de streaming de vídeos. Interface intuitiva para descobrir e assistir seu conteúdo favorito.",
      tech: ["React", "Node", "JSON", "CSS3"],
      image: "/SecretWord.png",
      liveUrl: "https://secret-word-mocha.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso",
    },
    {
      id: 4,
      title: "RocketCoffee",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["HTML5", "CSS3"],
      image: "/RocketCoffee.png",
      liveUrl: "https://rocket-coffee-beige.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso/RocketCoffee",
    },
    {
      id: 5,
      title: "Leitor De Destino",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/LeitorDeDestino.png",
      liveUrl: "https://leitor-de-destino.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso",
    },
    {
      id: 6,
      title: "RocketPay",
      description:
        "App social para conectar pessoas em tempo real. Login com um clique, compartilhe momentos e posts instantaneamente.",
      tech: ["HTML5", "CSS3", "Node"],
      image: "/RocketPay.png",
      liveUrl: "https://rocketpay-nine.vercel.app/",
      githubUrl: "https://github.com/DuhCardoso",
    },
  ];

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {seeMore == true
          ? projects.map((project) => {
              return <ProjectCard projectData={project} />;
            })
          : projects.slice(0, 3).map((project) => {
              return <ProjectCard projectData={project} />;
            })}
      </div>

      {/* View More */}
      <div className="text-center mt-12">
        <SecundaryButton
          content={seeMore ? "Mostrar menos" : "Mostrar mais"}
          onClick={() => {
            if (seeMore == false) {
              setSeeMore(true);
            } else {
              setSeeMore(false);
            }
          }}
        />
      </div>
    </>
  );
};

export default Portfolio;
