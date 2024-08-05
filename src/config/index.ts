import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default:
      "Adem Ben Abdallah | Full-Stack Developer | React & Next.js Expert",
    template: `%s | Adem Ben Abdallah`,
  },
  description:
    "Explore the professional profile of Adem Ben Abdallah, a highly skilled full-stack developer with expertise in TypeScript, React, Next.js, and Node.js. Discover his projects, experience, and contributions to web development from Tunisia.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Adem Ben Abdallah | Full-Stack Developer | React & Next.js Expert",
    emails: ["adembenabdallajh.contact@gmail.com"],
    phoneNumbers: ["+216 47067723"],
    siteName: "Adem Ben Abdallah",
    countryName: "Tunisia",
    description:
      "Explore the professional profile of Adem Ben Abdallah, a highly skilled full-stack developer with expertise in TypeScript, React, Next.js, and Node.js. Discover his projects, experience, and contributions to web development from Tunisia.",
    type: "profile",

    url: "https://www.adembenabdallah.com/",
    images: [
      {
        url: "https://www.adembenabdallah.com/images/adem.jpeg",
        width: 800,
        height: 600,
        alt: "Adem Ben Abdallah Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@AdemSoft",
    title: "Adem Ben Abdallah | Full-Stack Developer | React & Next.js Expert",
    description:
      "Explore the professional profile of Adem Ben Abdallah, a highly skilled full-stack developer with expertise in TypeScript, React, Next.js, and Node.js. Discover his projects, experience, and contributions to web development from Tunisia.",
    images: [
      {
        url: "https://www.adembenabdallah.com/images/adem.jpeg",
        alt: "Adem Ben Abdallah Profile Picture",
      },
    ],
  },
  metadataBase: new URL("https://www.adembenabdallah.com"),
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};
