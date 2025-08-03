import "./style/home.scss";

import Header from "./Header";
import Navigation from "./Navigation";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Element name="about">
        <section>
          <h2>About Section</h2>
        </section>
      </Element>

      <Element name="services">
        <section>
          <h2>Services Section</h2>
        </section>
      </Element>
    </>
  );
}

export default Home;
