import { CardProps } from "../types";

import IronFit from "./../assets/IronFit.webp";
import CarrinhoPlus from "./../assets/CarrinhoPlus.webp";
import Countdown from "./../assets/Countdown.webp";
import LoginForm from "./../assets/Login-Form-CSS.webp";
import Cafta from "./../assets/Cafta.webp";
import RickAndMorty from "./../assets/RickAndMorty.webp";

const CompleteApps: CardProps[] = [
  {
    image: Cafta,
    tools: "Next.js TailwindCSS TypeScript NodeJs Express PostgreSQL Prisma Cloudflare",
    nameProj: "SiteCafta",
    description: "projects.completeApps.caftaDesc",
    link: "https://cafta-acervo-digital.vercel.app/",
  },
  {
    image: CarrinhoPlus,
    tools: "React SCSS NodeJs Express Prisma PostgreSQL",
    nameProj: "Carrinho+",
    description: "projects.completeApps.carrinhoDesc",
    link: "https://carrinho-seven.vercel.app/",
  },
  {
    image: IronFit,
    tools: "Vue.js Vuetify SpringBoot PostgreSQL Firebase",
    nameProj: "IronFit",
    description: "projects.completeApps.ironfitDesc",
    link: "https://iron-fit-pied.vercel.app/",
  },
];

const SimpleApps: CardProps[] = [
  {
    image: RickAndMorty,
    tools: "React HTML CSS TypeScript",
    nameProj: "Rick and Morty",
    description: "projects.smallProjects.rickAndMortyDesc",
    link: "https://rick-and-morty-app-ochre-chi.vercel.app",
  },
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