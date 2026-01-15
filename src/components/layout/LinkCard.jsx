import React from "react";

const LinkCard = ({ content, href, className }) => {
  return (
    <li className={`list-none`}>
      <a href={href} target="_blank">
        <button className={`p-3 linkCard ${className} cursor-pointer`}>
          {content}
        </button>
      </a>
    </li>
  );
};

export default LinkCard;
