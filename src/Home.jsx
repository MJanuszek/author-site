import "./style/home.scss";

import Header from "./Header";
import Navigation from "./Navigation";

import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Header />

      <Footer />
    </div>
  );
}

export default Home;
