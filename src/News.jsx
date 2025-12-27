import "./style/news.scss";
import Navigation from "./Navigation";

const News = function () {
  return (
    <div className="news">
      <Navigation />
      <div className="event-new-book">
        <h1>Nowość 2026!</h1>
        <div className="new-book-cover"></div>
        <p>
          W 2026 roku w wydawnictwie Lucky ukażą się dwie moje nowe powieści.
          Wyczekujcie! Będzie się działo... zwłaszcza, jeśli tęsknicie za Leną,
          Dagmarą i Zytą z "Jeszcze będziemy szczęśliwi" i Marcelem Raniuszkiem
          oraz Augustem Piątkowskim z "Dziewczyny bez serca".{" "}
        </p>
      </div>
      <div className="event">
        <div className="event-foto"></div>
      </div>
    </div>
  );
};

export default News;
