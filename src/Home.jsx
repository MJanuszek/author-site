import "./style/home.scss";

import Header from "./Header";
import Navigation from "./Navigation";
import PlotExtract from "./PlotExtract";
import Books from "./Books";

import Footer from "./Footer";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Header />

      <PlotExtract />

      <Element name="books">
        <section>
          <Books />
        </section>
      </Element>

      <Footer />
    </div>
  );
}

export default Home;
