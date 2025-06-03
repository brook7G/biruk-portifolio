import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/brook7G" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/birukfekadu" },
  { icon: <FaTelegram />, path: "https://t.me/birukefekadu" },
  { icon: <FaPhone />, path: "+251938741514" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
