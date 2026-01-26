import { useEffect, useState } from "react";

import SecundaryButton from "../../../../layout/SecundaryButton";
import ProjectCard from "./Component/ProjectCard";

const Portfolio = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("/data/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {seeMore
          ? projectsData.map((project) => {
              return <ProjectCard projectData={project} />;
            })
          : projectsData
              .slice(
                0,
                window.innerWidth < 769 && window.innerWidth > 640 ? 2 : 3,
              )
              .map((project) => {
                return <ProjectCard key={project.id} projectData={project} />;
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
