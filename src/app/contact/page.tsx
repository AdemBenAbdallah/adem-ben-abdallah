"use client";

import ContactCard from "@/components/cards/contact";
import AboutCard from "@/components/ui/aboutCard";
import Btn from "@/components/ui/btn";
import { Input } from "@/components/ui/input";
import SelectInput from "@/components/ui/selectInput";
import Textarea from "@/components/ui/textarea";
import "@/styles/mdx.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPhoneVolume, FaUser, FaVoicemail } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formRef.current?.requestSubmit();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm("service_ku32j22", "template_so4jpup", formRef.current, {
        publicKey: "axUyFqHM-Ta4P82ta",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <div id="contact" className="pt-24 px-3 lg:px-8 pb-20">
      <AboutCard>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call Me Directly At"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+216 47 067 723"
              btnText="Call me"
            />
            <ContactCard
              title="Email Me At"
              icon={<FaVoicemail className="fill-[#333] text-lg" />}
              text="adembenabdallah.contact@gmail.com"
              btnText="Email me"
            />
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow p-3"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb4 gap-8">
                  {serviceOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      type="checkbox"
                      id={service.id}
                      text={service.text}
                      selectOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Multiple select wrapper */}

            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">What is your budget?</h1>
                <div className="flex flex-wrap items-center justify-between mb4 gap-8">
                  {budgetOptions.map((budget) => (
                    <SelectInput
                      key={budget.id}
                      type="radio"
                      id={budget.id}
                      text={budget.text}
                      selectOptions={budgets}
                      setSelectedOptions={setBudgets}
                      allowMultiple={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* TextArea message */}
            <Textarea
              name="message"
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />

            <div className="hidden">
              <input value={services.join(",")} name="services" />
              <input value={budgets.join("")} name="budget" />
            </div>

            <div
              onClick={() => buttonRef.current?.click()}
              className="w-full flex justify-end"
            >
              <Btn className="!w-44 !py-3 !text-xl">
                {loading ? "Sending..." : "Send"}
                <SiMinutemailer />
              </Btn>
            </div>
            <div className="hidden">
              <button ref={buttonRef} type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </AboutCard>
    </div>
  );
};

const serviceOptions = [
  {
    id: "Web Development",
    text: "Web Developmeent",
  },
  {
    id: "Full Webiste",
    text: "Full Webiste",
  },
  {
    id: "Web Design",
    text: "Web Design",
  },
  {
    id: "SEO",
    text: "SEO",
  },
  {
    id: "SMM",
    text: "SMM",
  },
];

const budgetOptions = [
  {
    id: "<$500",
    text: "<$500",
  },
  {
    id: "$500 - $2000",
    text: "$500 - $2000",
  },
  {
    id: "$2000 - $5000",
    text: "$2000 - $5000",
  },
  {
    id: ">$5000",
    text: ">$5000",
  },
];
export default Contact;
