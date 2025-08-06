import "./style/home.scss";

import Header from "./Header";
import Navigation from "./Navigation";
import PlotExtract from "./PlotExtract";
import Books from "./Books";
import News from "./News";
import Quotes from "./Quotes";
import Footer from "./Footer";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <div className="inspiration">
        <p>
          Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość
          wymyśliła.
        </p>
        <p>– Wisława Szymborska</p>
      </div>

      <Element name="about">
        <section>
          <div className="about-author">
            <div className="foto"></div>
            <p className="about-description">
              Jagoda Wochlik debiutowała w 2011 roku powieścią "Milczące słowa".
              Od tamtej pory napisała kilka powieści obyczajowych. W swojej
              twórczości stara się poruszać istotne współcześnie problemy
              (trudne relacje rodzinne, lęk przed bliskością, ciężka choroba). W
              2025 roku jej książka "Dziewczyna bez serca" otrzymała nagrodę
              czytelników portalu Granice.pl dla Najlepszej Książki na Wiosnę.
              Zawodowo także związała swoje życie z książkami - jest
              bibliotekarką. Wydaje się osobą wielu sprzeczności - lubi muzykę
              klasyczną i k-pop, suknie średniowieczne i sukienki z lat
              pięćdziesiątych, poezję Wisławy Szymborskiej i literaturę fantasy.
              Najchętniej spędza czas wolny na kanapie, oglądając seriale.
              Obecnie mieszka w małym wielkopolskim miasteczku wraz ze swoim
              kotem. Wciąż ma nadzieję, że kiedy dorośnie, zostanie Galadrielą.
            </p>
          </div>
        </section>
      </Element>
      <PlotExtract />
      <Element name="news">
        <section>
          <News />
        </section>
      </Element>
      <Element name="books">
        <section>
          <Books />
        </section>
      </Element>
      <Quotes />
      <Footer />
    </div>
  );
}

export default Home;
