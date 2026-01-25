import "./style/news.scss";
import Navigation from "./Navigation";
import Crossover from "./Crossover";

const News = function () {
  return (
    <div className="news">
      <Navigation />
      {/* ------------------------------------------------------------ */}
      <div className="announce">
        <div className="announce-card">
          <div className="announce-cover announce-cover--premiere"></div>

          <div className="announce-description">
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
      </div>

      {/* ---------------------------------------------------------- */}
      <div className="event-new-book">
        <h1>Nowości 2026!</h1>
        {/* <div className="new-book-cover"></div> */}
        <p>
          W 2026 roku w wydawnictwie Lucky ukażą się dwie moje nowe powieści.
          Wyczekujcie! Będzie się działo... zwłaszcza, jeśli tęsknicie za Leną,
          Dagmarą i Zytą z "Jeszcze będziemy szczęśliwi" i Marcelem Raniuszkiem
          oraz Augustem Piątkowskim z "Dziewczyny bez serca".{" "}
        </p>
      </div>

      {/* ----- */}
      <div className="vote">
        <div className="img-vote">
          <a
            href="https://www.ksiazkiroku.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="vote-link"
          >
            Książki Roku – zagłosuj
          </a>
          <div
            className="vote-image"
            role="img"
            aria-label="Książki Roku – nagroda literacka"
          ></div>
        </div>
      </div>

      {/* ----- */}
      <Crossover />
      {/* ------ */}
      <div className="event">
        <div className="event-foto"></div>
      </div>
    </div>
  );
};

export default News;
