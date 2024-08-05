import AboutCard from "../ui/aboutCard";
import TimeLine, { Item } from "../ui/timeLine";

const EducationData = [
  {
    date: "Sep 2021 -  Jun 2023",
    title: "Software Engineering",
    subtitle: "Isima Mahdia",
    link: "https://isima.rnu.tn/",
    tag: "Student",
  },
];
const EducationCard = () => {
  return (
    <div id="education">
      <AboutCard title="My Education">
        <TimeLine>
          {EducationData.map((data, i) => (
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

export default EducationCard;
