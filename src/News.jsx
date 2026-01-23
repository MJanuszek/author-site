import "./style/news.scss";
import Navigation from "./Navigation";
import Crossover from "./Crossover";

const News = function () {
  return (
    <div className="news">
      <Navigation />
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
      <div className="link-vote">
        <a
          href="https://www.ksiazkiroku.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="award-link"
          aria-label="Książki Roku – przejdź do strony"
        >
          <img
            src="src/assets/ksiazkiroku.png"
            alt="Książki Roku – nagroda literacka"
            className="award-image"
          />
        </a>
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
