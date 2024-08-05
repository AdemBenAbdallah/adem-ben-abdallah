import AboutCard from "../ui/aboutCard";
import TimeLine, { Item } from "../ui/timeLine";

const CertificationData = [
  {
    date: "Present             ",
    title: "Advanced React with TypeScript",
    subtitle: "Matt Pocock",
    link: "https://www.totaltypescript.com/workshops/advanced-react-with-typescript",
    tag: "",
  },
  {
    date: "Issued Jul 2023",
    title: "Advanced React",
    subtitle: "Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/AHZT8RFJRZSS?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    tag: "",
  },
  {
    date: "Issued Jan 2023",
    title: "EF SET English Certificate 94/100 (C2 Proficient",
    subtitle: "EF Standard English Test (EF SET)",
    link: "https://cert.efset.org/UgxWrz",
    tag: "",
  },
];

const CertificationCard = () => {
  return (
    <div id="certifications">
      <AboutCard title="My Certifications">
        <TimeLine>
          {CertificationData.map((data, i) => (
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

export default CertificationCard;
