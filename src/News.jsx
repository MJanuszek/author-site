import "./style/news.scss";

const News = function () {
  return (
    <div className="news">
      <h1>Aktualności</h1>
      <div className="event">
        <div className="event-foto"></div>
        <p className="event-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae culpa
          aut iure aperiam ad? Nisi eum ad repellat, corporis fugiat facilis.
          Enim repellendus, assumenda esse voluptatem distinctio, quas ab
          suscipit labore eligendi odit ea tenetur sit natus numquam, quod qui
          voluptates quia corrupti architecto doloremque ipsum voluptas neque.
          Soluta, accusantium?
        </p>
      </div>
      <div className="event-new-book">
        <h1>Nowy tytuł już w listopadzie '25!</h1>
        <div className="new-book-cover"></div>
        <p className="new-book-description"></p>
      </div>
    </div>
  );
};

export default News;
