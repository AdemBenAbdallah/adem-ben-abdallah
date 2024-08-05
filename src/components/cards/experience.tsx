import AboutCard from "../ui/aboutCard";
import TimeLine, { Item } from "../ui/timeLine";

const experientialData = [
  {
    date: "Nov 2023 - Jul 2024",
    title: "Front-End Developer",
    subtitle: "Quetratech",
    link: "https://quetratech.com/",
    tag: "Full Time",
  },
  {
    date: "Mar 2023 - Jul 2023",
    title: "Full Stack Developer",
    subtitle: "Handmade Graft Group",
    tag: "Intership",
  },
];
const ExperienceCard = () => {
  return (
    <div id="experience">
      <AboutCard title="My Experience">
        <TimeLine>
          {experientialData.map((data, i) => (
            <Item
              key={i}
              date={data.date}
              title={data.title}
              subtitle={data.subtitle}
              link={data.link}
              tag={data.tag}
            />
          ))}
        </TimeLine>
      </AboutCard>
    </div>
  );
};

export default ExperienceCard;
