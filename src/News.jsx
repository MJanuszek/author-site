import "./style/news.scss";
import Navigation from "./Navigation";
import Crossover from "./Crossover";

const News = function () {
  return (
    <main className="news">
      <Navigation />

      {/* PREMIERA / ZAPOWIEDŹ */}
      <section
        className="news-section announce"
        aria-labelledby="announce-title"
      >
        <div className="announce-card">
          <div
            className="announce-cover announce-cover--premiere"
            role="img"
            aria-label="Okładka: premiera"
          ></div>

          <div className="announce-description">
            <h2 id="announce-title" className="section-title">
              Premiera
            </h2>

            <p className="announce-desc">
              Czy można spotkać kogoś po latach… i odkryć, że nic nie jest
              takie, jak zapamiętaliśmy?
            </p>

            <p className="announce-desc">
              Eliza i Feliks w czasach szkoły średniej byli parą. Jednak z
              jakiegoś, niejasnego dla ich przyjaciół powodu, rozstali się tuż
              przed maturą. I nigdy już nie zamienili z sobą ani słowa. Los
              jednak bywa przewrotny…
            </p>

            <p className="announce-desc">
              Gdy widzą się pierwszy raz po latach, dawne wspomnienia odżywają.
              Czy znana i ceniona aktorka nadal ma coś wspólnego z nieśmiałą
              uczennicą? Czy ceniony specjalista od luksusowych aut, nadal ma
              duszę nicponia, którym był w czasach szkoły średniej? Jakie
              nieporozumienie położyło się cieniem na życiu tych dwojga i
              sprawiło, że się rozstali? Czy uczucie z lat szkolnych odżyje?
            </p>
          </div>
        </div>
      </section>

      {/* NOWOŚCI */}
      <section
        className="news-section event-new-book"
        aria-labelledby="newbooks-title"
      >
        <h2 id="newbooks-title" className="section-title">
          Nowości 2026!
        </h2>

        <p className="section-text">
          W 2026 roku w wydawnictwie Lucky ukażą się dwie moje nowe powieści.
          Wyczekujcie! Będzie się działo... zwłaszcza, jeśli tęsknicie za Leną,
          Dagmarą i Zytą z "Jeszcze będziemy szczęśliwi" i Marcelem Raniuszkiem
          oraz Augustem Piątkowskim z "Dziewczyny bez serca".
        </p>
      </section>

      {/* GŁOSOWANIE */}
      <section className="news-section vote" aria-labelledby="vote-title">
        <h2 id="vote-title" className="section-title">
          Książki Roku
        </h2>

        <a
          href="https://www.ksiazkiroku.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-card"
          aria-label="Książki Roku – przejdź do głosowania"
        >
          <div
            className="vote-image"
            role="img"
            aria-label="Książki Roku – nagroda literacka"
          ></div>
          <span className="vote-link">Zagłosuj</span>
        </a>
      </section>

      {/* CROSSOVER */}
      <section className="news-section">
        <Crossover />
      </section>

      {/* EVENT FOTO */}
      <section className="news-section event" aria-label="Wydarzenie">
        <div
          className="event-foto"
          role="img"
          aria-label="Zdjęcie z wydarzenia"
        ></div>
      </section>
    </main>
  );
};

export default News;
