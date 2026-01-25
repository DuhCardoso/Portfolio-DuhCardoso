import { useEffect, useState } from "react";
import TechCard from "./components/TechCard";

const TechStack = () => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetch("/data/TechIcons.json")
      .then((res) => res.json())
      .then((data) => setTechData(data));
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
      {/* Additional Skills */}

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 gap-5">
        {techData.map((tech) => (
          <TechCard tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
