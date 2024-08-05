import MyImage from "@/../public/images/adem.jpeg";
import { cn } from "@/lib/utils";

import Image from "next/image";
import AboutCard from "../ui/aboutCard";

const MeCard = () => {
  return (
    <AboutCard className="2xl:h-full p-0">
      <div className="w-full h-full  overflow-hidden ">
        <Image
          src={MyImage}
          alt="Adem ben abdallah"
          className="obsolute top-0 left-0 bottom-0 right-0 h-full object-cover rounded-3xl"
          placeholder="blur"
        />
      </div>
      <div className="absolute top-[65%] space-y-2 px-3">
        <Tag
          text="Hello, universe 👋"
          className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        />
        <Tag
          text="Adem ben abdallah 🫱"
          className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        />

        <Tag
          text="Fullstack Developer 🧑"
          className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        />
        <Tag
          text="Lifelong Learner 🧑‍🏫"
          className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        />
      </div>
    </AboutCard>
  );
};

const Tag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={cn(
        "bg-black/[0.7]  w-fit py-1.5 px-3 rounded-full",
        className
      )}
    >
      <p className="text-primary-foreground leading-[100%] font-bold">{text}</p>
    </div>
  );
};
export default MeCard;
