import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import Btn from "./btn";

const Socials = () => {
  return (
    <div className="flex items-center gap-3">
      {socials.map((item, i) => (
        <Link href={item.link} key={i}>
          <Btn>
            <span className="w-7 h-7 grid place-items-center">{item.icon}</span>
          </Btn>
        </Link>
      ))}
    </div>
  );
};

const socials = [
  {
    icon: <GrGithub className="w-4 h-4" />,
    link: "https://github.com/AdemBenAbdallah",
    username: "AdemBenAbdallah",
  },
  {
    icon: <FaLinkedinIn className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/adem-ben-abdallah-a3153023a/",
    username: "AdemBenAbdallah",
  },
  {
    icon: <BsTwitter className="w-4 h-4" />,
    link: "https://x.com/AdemSoft",
    username: "AdemBenAbdallah",
  },
];
export default Socials;
