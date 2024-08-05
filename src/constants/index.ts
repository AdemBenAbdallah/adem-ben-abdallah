import Blitz from "@/../public/images/svg/blitz-2.svg";
import Css from "@/../public/images/svg/css.svg";
import FramerMotion from "@/../public/images/svg/framer-motion.svg";
import Html from "@/../public/images/svg/html.svg";
import Mantine from "@/../public/images/svg/mantine.svg";
import Mongodb from "@/../public/images/svg/mongodb-icon-1.svg";
import Nest from "@/../public/images/svg/nestjs.svg";
import Next from "@/../public/images/svg/next.svg";
import PostgreSQL from "@/../public/images/svg/postgresql.svg";
import ReactImg from "@/../public/images/svg/react.svg";
import Sass from "@/../public/images/svg/sass.svg";
import Tailwind from "@/../public/images/svg/tailwind.svg";
import Typescript from "@/../public/images/svg/typescript.svg";
import { Icons } from "@/components";

export const perks = [
  {
    icon: Icons.auth,
    title: "Get in Touch",
    info: "Reach out to discuss your project and explore potential collaboration.",
  },
  {
    icon: Icons.customize,
    title: "Schedule a Meeting",
    info: "Let's have a detailed discussion about your project's requirements and goals.",
  },
  {
    icon: Icons.launch,
    title: "Develop & Launch",
    info: "Turn your vision into reality. I'll develop your project and launch it for the world to see.",
  },
];

export const features = [
  {
    icon: Icons.bolt,
    title: "Fast Performance",
    info: "Optimized for speed to ensure your SaaS application runs quickly and efficiently.",
  },
  {
    icon: Icons.palette,
    title: "Customizable Design",
    info: "Convert your designs into fully functional and visually appealing SaaS applications.",
  },
  {
    icon: Icons.seo,
    title: "SEO Optimized",
    info: "Built-in SEO features ensure your application ranks well on search engines.",
  },
  {
    icon: Icons.monitor,
    title: "Responsive Design",
    info: "Your SaaS application will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: Icons.shop,
    title: "E-commerce Integration",
    info: "Seamlessly integrate e-commerce solutions into your SaaS application.",
  },
  {
    icon: Icons.server,
    title: "Reliable Hosting",
    info: "Secure and reliable hosting to keep your SaaS application online and running smoothly.",
  },
];

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    buttonText: "Start for free",
    features: ["Limited projects", "1 Team member", "Basic features"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "5 Team members",
      "Advanced design tools",
      "Customizable domain",
    ],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Enterprise",
    description: "For serious agency owners",
    price: "$399",
    duration: "month",
    highlight: "Everything in Starter, plus",
    buttonText: "Upgrade to Enterprise",
    features: [
      "Unlimited projects",
      "Unlimited Team members",
      "Custom branding",
      "Priority support (24/7)",
    ],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

export const bentoCards = [
  {
    title: "Start with Inspiration",
    info: "Browse our vast library of pre-designed templates or upload your own images.",
    imgSrc: "/assets/bento-1.svg", // Lightbulb or Inspiration icon
    alt: "Inspiration for website creation",
  },
  {
    title: "AI Assists Your Vision",
    info: "Our intelligent AI tailors suggestions and functionalities based on your goals.",
    imgSrc: "/assets/bento1.svg", // AI Assistant icon
    alt: "AI website building assistant",
  },
  {
    title: "Drag & Drop Customization",
    info: "Effortlessly personalize your website with our intuitive drag-and-drop editor.",
    imgSrc: "/assets/bento1.svg", // Drag and Drop icon or hand editing a website
    alt: "Website customization with drag and drop",
  },
  {
    title: "Launch & Shine Online",
    info: "Publish your website with a single click and take your brand to the world.",
    imgSrc: "/assets/bento1.svg", // Rocket launching or website going live
    alt: "Website launch and publication",
  },
];

export const reviews = [
  {
    name: "Salem Ahmed",
    username: "@salem",
    body: "The front-end design is seamless and the user experience is top-notch. Truly impressive work!",
  },
  {
    name: "Akrem Mohamed",
    username: "@akrem",
    body: "Outstanding full-stack development! The integration of features and performance is fantastic.",
  },
  {
    name: "Sarah Cohen",
    username: "@sarah",
    body: "Exceptional service! The attention to detail and efficiency in both design and functionality are remarkable.",
  },
  {
    name: "Amine Bouhlel",
    username: "@amine",
    body: "The project exceeded expectations. The responsive design and smooth functionality are a testament to their skills.",
  },
  {
    name: "Maher Hassan",
    username: "@maher",
    body: "Impressive work on both the front-end and back-end. The application runs smoothly and looks great.",
  },
  {
    name: "Idrissi Chris",
    username: "@idrissi",
    body: "A real game-changer! The development work is polished and professional, delivering excellent results.",
  },
];

export const stackData = [
  {
    title: "Basics",
    stacks: [
      {
        name: "HTML",
        img: Html,
        bgColor: "#e34c26",
      },
      {
        name: "Css",
        img: Css,
        bgColor: "#264de4",
      },
      {
        name: "Typescript",
        img: Typescript,
        bgColor: "#3178c6",
      },
    ],
  },
  {
    title: "FrontEnd Fws",
    stacks: [
      {
        name: "React",
        img: ReactImg,
        bgColor: "#2D2C33",
      },
      {
        name: "Next",
        img: Next,
        bgColor: "#2D2C33",
      },
      {
        name: "Blitz",
        img: Blitz,
        bgColor: "#2D2C33",
      },
    ],
  },
  {
    title: "Syling",
    stacks: [
      {
        name: "Mantine",
        img: Mantine,
        bgColor: "#2D2C33",
      },
      {
        name: "Tailwind",
        img: Tailwind,
        bgColor: "#2D2C33",
      },
      {
        name: "Sass",
        img: Sass,

        bgColor: "#2D2C33",
      },
    ],
  },
  {
    title: "Animation",
    stacks: [
      {
        name: "Framer Motion",
        img: FramerMotion,
        bgColor: "#2D2C33",
      },
    ],
  },
  {
    title: "BackEnd Fws",
    stacks: [
      {
        name: "Nest",
        img: Nest,
        bgColor: "#2D2C33",
      },
      {
        name: "PostgreSQL",
        img: PostgreSQL,
        bgColor: "#2D2C33",
      },
      {
        name: "MongoDB",
        img: Mongodb,
        bgColor: "#2D2C33",
      },
    ],
  },
];
