import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,

  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
 
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Contact",
    url: "#Contact",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const DigiBaitServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const DigiBaitServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    "title": "Client Consultation",
    "text": "Conduct detailed consultations with clients to understand their business needs and goals for website development and digital marketing.",  
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    "title": "Website Development",
    "text": "Develop customized websites tailored to clients' specific business requirements, ensuring a user-friendly interface and optimal functionality.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    "title": "Digital Marketing Strategy",
    "text": "Create comprehensive digital marketing strategies, including SEO, social media marketing, and email campaigns, to enhance clients' online presence.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    "title": "Analytics and Reporting",
    "text": "Implement tools to track website performance and marketing campaign success, providing clients with detailed reports and insights for continuous improvement.",
     date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  " We specialize in delivering tailored solutions that drive growth and maximize efficiency, empowering you to stay ahead in today's competitive landscape.";

export const collabContent = [
  {
    id: "0",
    title: "Tailored Digital Solutions",
    text: "Our expertise lies in crafting customized digital solutions that precisely meet your business objectives.",
  },
  {
    id: "1",
    title: "Cutting-edge Technology",
    text: "Harnessing the latest in technology to create innovative solutions that elevate your business capabilities.",
  },
  {
    id: "2",
    title: "Strategic Partnership",
    text: "We partner with you to understand your unique challenges and provide solutions that drive tangible business results.",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "1",
    title: "Digital Marketing",
    text: "Enhance your online presence and reach your target audience effectively. Our comprehensive digital marketing strategies are designed to drive traffic, increase engagement, and boost your brand's visibility across various digital platforms.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon6, 
    imageUrl: benefitImage2, // Make sure you have this variable defined or replace it with the actual URL.
  },
  
  {
    id: "0",
    title: "Websites Development",
    text: "Custom websites designed to meet your specific business needs. Our team of expert developers creates visually appealing and highly functional websites that align perfectly with your brand identity and business objectives.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "UI/UX Design",
    text: "Crafting intuitive and engaging user interfaces to elevate user experiences. Our expert team focuses on user-centered design principles to create interfaces that are not only visually appealing but also functional and easy to navigate.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mobile Applications",
    text: "Mobile apps for both iOS and Android platforms. We develop user-friendly and feature-rich mobile applications that provide a seamless user experience and enhance your brand's mobile presence.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "CMS",
    text: "Streamline your website updates and management with our robust Content Management Systems (CMS). Our tailored solutions empower you to effortlessly create, edit, and publish content without needing technical expertise.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "AI Solutions",
    text: "Advanced AI solutions to optimize and automate your business processes. Our AI-driven tools help you make data-driven decisions, improve customer experiences, and gain a competitive edge.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [

  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
];
