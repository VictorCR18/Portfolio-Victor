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

export { CompleteApps, SimpleApps };
