import BackgroundCard from "@/components/cards/backgournd";
import CertificationCard from "@/components/cards/certification";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import StackCard from "@/components/cards/stack";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div id="about" className="pt-24 px-3 lg:px-8">
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <Card title="Gallery" className="2xl:hidden">
            {/* <Gallery /> */}
          </Card>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <ExperienceCard />
            <CertificationCard />
          </div>
          <div className="space-y-4">
            <StackCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">{/* <Gallery /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
