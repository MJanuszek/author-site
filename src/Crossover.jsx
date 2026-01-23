import "./style/news.scss";

const Crossover = function () {
  return (
    <section className="crossovers">
      <h2 className="crossovers-title">
        Wyjątkowo polubiliście któregoś z bohaterów?
      </h2>

      <p className="crossovers-intro">
        Chcecie ich spotkać ponownie? <br />
        Istnieje na to szansa…
      </p>

      <ul className="crossovers-list">
        <li className="crossover-item">
          <h3 className="crossover-book">Jesteś muzyką</h3>
          <p className="crossover-desc">
            Pojawiają się w niej Agata Storosz i Weronika Tułodzińska z
            <span> Każdego dnia</span>.
          </p>
        </li>

        <li className="crossover-item">
          <h3 className="crossover-book">Wszystkie nasze pory roku</h3>
          <p className="crossover-desc">
            Pojawiają się w niej Agata Storosz i Weronika Tułodzińska z
            <span> Każdego dnia</span>, Zofia Jankowiak i Ignacy Piątkowski z
            <span> Jesteś muzyką</span> oraz Zyta z
            <span> Jeszcze będziemy szczęśliwi</span>.
          </p>
        </li>

        <li className="crossover-item">
          <h3 className="crossover-book">Jeszcze będziemy szczęśliwi</h3>
          <p className="crossover-desc">
            Pojawiają się w niej Irena i Radek z
            <span> Wszystkich pór roku</span>.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Crossover;
