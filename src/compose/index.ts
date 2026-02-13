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
    description: "Regressive counter",
    link: "http://countdown-victor.netlify.app",
  },
  {
    image: LoginForm,
    tools: "HTML CSS",
    nameProj: "Camp.in",
    description: "Login screen",
    link: "http://campin-victor.netlify.app",
  },
];

const educationData = [
  {
    role: "Computer Technician", // Técnico em Informática
    date: "2019 - 2021",
    institution: "EEEP Flávio Gomes Granjeiro",
    status: "completed",
    description:
      "Development of Desktop Software, Web Full-Stack foundations & Database basics.",
    techs: ["Logic", "Database", "Desktop"],
  },
  {
    role: "Information Systems", // Bacharelado em SI
    date: "2022 - Present",
    institution: "Universidade Federal do Ceará",
    status: "loading",
    description:
      "Focusing on Software Architecture, Data Persistence, and Validation algorithms.",
    techs: ["Algorithms", "Architecture", "Validation"],
  },
];

export { CompleteApps, SimpleApps, educationData };
