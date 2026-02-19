export interface CardProps {
  image?: string;
  tools: string;
  nameProj: string;
  description: string;
  link: string;
}

export interface SkillsProps {
  symbol: string;
  display: string;
}

export interface AboutMeProps {
  symbol: string;
  display: string;
}

export interface ContactProps {
  symbol: string;
  display: string;
}

export interface ProjectsProps {
  symbol: string;
  display: string;
}

export interface ContactData {
  name: string;
  email: string;
  title: string;
  message: string;
}
