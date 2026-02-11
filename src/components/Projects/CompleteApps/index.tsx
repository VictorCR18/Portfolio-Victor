import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";

import IronFit from "../../../assets/IronFit.png";
import Carrinho from "../../../assets/Carrinho.png";

import "./styles.css";

export function CompleteApps() {
  return (
    <div className="main-complete-apps">
      <div className="title-complete-apps">
        <Titles symbol="/" title="projects" />
        <p>List of my projects</p>
      </div>
      <div className="content-complete-apps">
        <Titles symbol="#" title="complete apps" />
        <div className="list-complete-apps">
          <Card
            image={IronFit}
            tools="Vue.js Vuetify SpringBoot PostgreSQL Firebase"
            nameProj="IronFit"
            description="Fitness app"
            link="https://iron-fit-pied.vercel.app/"
          />
          <Card
            image={Carrinho}
            tools="React SCSS NodeJs Express Prisma PostgreSQL"
            nameProj="Carrinho+"
            description="Shopping cart app"
            link="https://carrinho-seven.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}
