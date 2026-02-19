import { CardProps } from "../types";

import IronFit from "./../assets/IronFit.png";
import Carrinho from "./../assets/Carrinho.png";
import Countdown from "./../assets/Countdown.png";
import LoginForm from "./../assets/Login-Form-CSS.png";

const CompleteApps: CardProps[] = [
  {
    image: IronFit,
    tools: "Vue.js Vuetify SpringBoot PostgreSQL Firebase",
    nameProj: "IronFit",
    description: "Fitness app",
    link: "https://iron-fit-pied.vercel.app/",
  },
  {
    image: Carrinho,
    tools: "React SCSS NodeJs Express Prisma PostgreSQL",
    nameProj: "Carrinho+",
    description: "Shopping cart app",
    link: "https://carrinho-seven.vercel.app/",
  },
];

const SimpleApps: CardProps[] = [
  {
    image: Countdown,
    tools: "HTML CSS JavaScript",
    nameProj: "Countdown",
    description: "projects.smallProjects.countdownDesc",
    link: "http://countdown-victor.netlify.app",
  },
  {
    image: LoginForm,
    tools: "HTML CSS",
    nameProj: "Camp.in",
    description: "projects.smallProjects.loginDesc",
    link: "http://campin-victor.netlify.app",
  },
];

const educationData = [
  {
    role: "education.tech.role",
    date: "education.tech.date",
    institution: "education.tech.institution",
    status: "completed",
    description: "education.tech.description",
    techs: ["Logic", "Database", "Desktop"],
  },
  {
    role: "education.university.role",
    date: "education.university.date",
    institution: "education.university.institution",
    status: "loading",
    description: "education.university.description",
    techs: ["Algorithms", "Architecture", "Validation"],
  },
];

export { CompleteApps, SimpleApps, educationData };
