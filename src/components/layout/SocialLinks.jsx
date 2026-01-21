import { Github, Linkedin, Mail } from "lucide-react";
import LinkCard from "./LinkCard";

const SocialLinks = () => {
  return (
    <ul
      className="flex gap-6 justify-center mb-16"
      data-aos="fade-up"
      data-aos-delay="1400"
    >
      <LinkCard
        content={<Github size={24} />}
        href="https://github.com/DuhCardoso"
      />
      <LinkCard
        content={<Linkedin size={24} />}
        href="https://www.linkedin.com/in/duhcardoso/"
      />
      <LinkCard content={<Mail size={24} />} href="#contact" />
    </ul>
  );
};

export default SocialLinks;
