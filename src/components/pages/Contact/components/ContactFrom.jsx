import { Mail, User, MessageSquare, Send } from "lucide-react";
import FormImput from "./FormImput";
import FormTextarea from "./FormTextarea";

const ContactFrom = () => {
  return (
    <div className=" gap-8 mb-12">
      <form
        action="https://formsubmit.co/duhcardoso.contato@gmail.com"
        method="POST"
        className="space-y-4"
        target="_blank"
      >
        {/* Name */}
        <FormImput
          icon={<User size={20} className="iconForm" />}
          type="text"
          name="name"
          placeholder="Seu Nome"
          durationFate="100"
        />

        {/* Email */}
        <FormImput
          icon={<Mail size={20} className="iconForm" />}
          type="email"
          name="email"
          placeholder="Seu Email"
          durationFate="200"
        />

        {/* Message */}
        <FormTextarea
          icon={<MessageSquare size={20} className="iconForm" />}
          name="message"
          placeholder="Sua Mensagem"
          durationFate="300"
        />

        <button
          type="submit"
          className="buttonForm"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <Send size={20} />
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
