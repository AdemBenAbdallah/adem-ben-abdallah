import { stackData } from "@/constants";
import AboutCard from "../ui/aboutCard";
import Tooltip from "../ui/tooltip";

const StackCard = () => {
  return (
    <AboutCard title="My Tech stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: `50px 1fr` }}
          >
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            <div className="flex gap-4">
              {tech.stacks.map((stack, i) => (
                <Tooltip
                  key={i}
                  title={stack.name}
                  image={stack.img}
                  bgColor={stack.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AboutCard>
  );
};

export default StackCard;
