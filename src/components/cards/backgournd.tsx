import AboutCard from "../ui/aboutCard";

const BackgroundCard = () => {
  return (
    <div id="background">
      <AboutCard className="md:h-full" title="My Background">
        <div>
          <p className="leading-[25px] font-normal text-white/[0.4] text-[16px]">
            I am a software engineering graduate from ISIMA with a deep passion
            for web development.
            <span className="text-white underline">
              Throughout my studies,
            </span>{" "}
            I diligently worked to enhance my skills in both frontend and
            backend development, aiming to create impactful software.
            <br />
            <span className="text-white underline">My journey began</span> with
            freelance projects, where I honed my abilities and gained valuable
            real-world experience.
            <span className="text-white underline">
              I had the opportunity
            </span>{" "}
            to develop a B2B e-commerce application for Handmade Graft Group, a
            project that significantly expanded my knowledge and expertise.
          </p>
          <p className="leading-[25px] font-normal text-white/[0.4] text-[16px] mt-4">
            Upon graduation, I joined Quetratech as a frontend developer, where
            I played a key role in building a complex SaaS application.
            <span className="text-white underline">
              This experience taught me
            </span>{" "}
            invaluable lessons in time management, handling large projects, and
            maintaining organizational excellence.
            <br />
            <span className="text-white underline">
              With a solid foundation
            </span>{" "}
            and diverse experience, I am now seeking new opportunities to apply
            my skills and contribute to innovative projects.
            <span className="text-white underline">
              My commitment to continuous learning
            </span>{" "}
            and my passion for web development drive me to deliver exceptional
            results in every endeavor.
          </p>

          <p className="mt-8 italic">
            Let&apos;s create something remarkable together.
          </p>
        </div>
      </AboutCard>
    </div>
  );
};

export default BackgroundCard;
