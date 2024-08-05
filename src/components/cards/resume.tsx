import MySignature from "@/../public/images/signature.png";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import AboutCard from "../ui/aboutCard";
import Btn from "../ui/btn";
import Socials from "../ui/socials";

const ResumeCard = () => {
  return (
    <AboutCard className="md:h-full ">
      <p className="text-lg xl:text-lg font-medium text-primary-foreground">
        I am a seasoned full-stack developer specializing in TypeScript, React
        (Next.js), and Node.js. With a strong foundation in front-end and
        back-end development, I excel in REST API, GraphQL, and tRPC design,
        testing, and deployment. I continuously stay updated with the latest
        technologies and trends to apply my skills and knowledge effectively.
        Armed with 2 years of full-stack experience and back-end expertise, I
        add a dash of AI cleverness and a dedication to web security.
        Overflowing with front-end sparkles and back-end muscle, I&apos;m ready
        to bring your web dreams to life. Le&apos;s create some online
        enchantment together! 🚀 📱
      </p>
      <div>
        <Image
          src={MySignature}
          alt="Adem ben abdallah"
          className="w-[50%] m-auto "
        />
      </div>
      <div className="flex items-center justify-between md:absolute md:bottom-8 md:left-6 md:w-[calc(100%-3rem)] ">
        <Socials />
        <Link href={"/resume.pdf"} target="_blank">
          <Btn>
            <FaDownload />
            Resume
          </Btn>
        </Link>
      </div>
    </AboutCard>
  );
};

export default ResumeCard;
