import "./style/quotes.scss";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";

const QUOTES = [
  {
    id: 1,
    text: "„… życie to kawał gówna. A my, jak te żuczki gnojowniki, toczymy tę kulkę przed sobą.”",
    book: "Milion smutnych atomów",
  },
  {
    id: 2,
    text: "„… pary są jak książki. Każdego zadziwia, co też inny sobie wybrał.”",
    book: "Milion smutnych atomów",
  },
  {
    id: 3,
    text: "„Dziadek posiadał zadziwiająco dużo książek. To wiedziałam o nim na pewno. Był zapalonym czytelnikiem. Choć gdy przyjechałam tu jako ośmiolatka, byłam przekonana, że jest tak”",
    book: "Tajemnica z przeszłości",
  },
  {
    id: 4,
    text: "„Nie wszystkie dni mogą być dobre, ale w każdym dniu może być coś dobrego.”",
    book: "Każdego dnia",
  },
];

const Quotes = function () {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  // auto–slide co 8 sekund
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = QUOTES[activeIndex];

  return (
    <div className="quotes-bg">
      <Element name="quotes">
        <section className="quotes">
          <div className="quotes-inner">
            <p className="quotes-text">{currentQuote.text}</p>
            <p className="quotes-book">— {currentQuote.book}</p>

            <div className="quotes-controls">
              <button
                type="button"
                className="quotes-arrow quotes-arrow--left"
                onClick={prev}
                aria-label="Poprzedni cytat"
              >
                ‹
              </button>
              <span className="quotes-counter">
                {activeIndex + 1} / {QUOTES.length}
              </span>
              <button
                type="button"
                className="quotes-arrow quotes-arrow--right"
                onClick={next}
                aria-label="Następny cytat"
              >
                ›
              </button>
            </div>

            <div className="quotes-dots">
              {QUOTES.map((quote, index) => (
                <button
                  key={quote.id}
                  type="button"
                  className={
                    index === activeIndex
                      ? "quotes-dot quotes-dot--active"
                      : "quotes-dot"
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Pokaż cytat ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default Quotes;
