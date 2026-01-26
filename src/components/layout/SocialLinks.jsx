import { Github, Linkedin, Mail } from "lucide-react";
import LinkCard from "./LinkCard";

const SocialLinks = ({ fate }) => {
  return (
    <ul
      className="flex gap-6 justify-center mb-16"
      data-aos={fate ? "fade-up" : ""}
      data-aos-delay={fate ? "1400" : ""}
    >
      <LinkCard
        content={<Github size={24} />}
        href="https://github.com/DuhCardoso"
        _blank={true}
      />
      <LinkCard
        content={<Linkedin size={24} />}
        href="https://www.linkedin.com/in/duhcardoso/"
        _blank={true}
      />
      <LinkCard content={<Mail size={24} />} href="#Contact" />
    </ul>
  );
};

export default SocialLinks;
