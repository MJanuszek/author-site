import "./style/quotes.scss";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";

const QUOTES = [
  {
    id: 1,
    text: "„Niezwykle dbamy o rzeczy. Pielęgnujemy je, przenosimy ze sobą z miejsca na miejsce, często kosztem drogich zabiegów i ekwilibrystyki. Rozpaczamy, gdy jakaś rzecz, do której byliśmy przywiązani, mająca znaczenie sentymentalne, zginie. Tymczasem ten sentyment często związany jest tak naprawdę z jakąś osobą. Czy dbamy o nią równie mocno, co o tę rzecz?”",
    book: "Tajemnica z przeszłości",
  },
  {
    id: 2,
    text: "„Tak naprawdę... Cóż, ludzi się nie podmienia tak łatwo jak przedmioty, a tymczasem o nich aż tak bardzo nie dbamy. Jeden z zupełnie niezrozumiałych paradoksów życia.”",
    book: "Tajemnica z przeszłości",
  },
  {
    id: 3,
    text: "„Bo przecież życie, które wiedziemy, jest tylko sumą podjętych przez nas decyzji. I tylko czas ma tyle mądrości i odwagi, by ujawnić, czy były dobre, czy złe.”",
    book: "Tajemnica z przeszłości",
  },
  {
    id: 4,
    text: "„Dziadek posiadał zadziwiająco dużo książek. To wiedziałam o nim na pewno. Był zapalonym czytelnikiem. Choć gdy przyjechałam tu jako ośmiolatka, byłam przekonana, że jest tak dlatego, że jest stary. Wszyscy starzy ludzie siedzą popołudniami w fotelach i czytają. Bo to najnudniejsze zajęcie na świecie! Tak wtedy myślałam, pamiętam to doskonale.”",
    book: "Tajemnica z przeszłości",
  },
  {
    id: 5,
    text: "„A między narodzinami i śmiercią jest dużo czasu na to, co pomiędzy.”",
    book: "Każdego dnia",
  },
  {
    id: 6,
    text: "„A teraz dam Ci Twój prezent. Na początek kilka banałów. Życie bywa cholernie ciężkie. W Twoim będą chwile bardzo złe. Ale zaciśniesz zęby i je przetrwasz. Będą też chwile szczęścia. Skąd to wiem? Bo wbrew pozorom życie trochę się równoważy. Będą w nim również ważne chwile, które zapomnisz. Tak się dzieje, niestety. I chwile bardzo błahe, które z jakiegoś powodu zapamiętasz. Tak też się niestety zdarza. Ale pielęgnuj je. Pielęgnuj je wszystkie. Bo są twoje.”",
    book: "Dziewczyna bez serca",
  },
  {
    id: 7,
    text: "„Dopóki nikogo nie krzywdzimy, powinniśmy być akceptowani tacy, jacy jesteśmy. Przynajmniej przez tych, którzy twierdzą, że nas kochają.”",
    book: "Wszystkie nasze pory roku",
  },
  {
    id: 8,
    text: "„Myślę, że w życiu każdego z nas zdarzają się różne pory roku. Raz w twoim sercu panuje zima, raz wiosna. Raz twój umysł to jednostajne burze. Czasami owiewa cię wiosenny ciepły wiatr i znów wierzysz, że wszystko jest możliwe. Gdy opanowuje cię melancholia, to jakbyś nieustannie tkwił w jesiennych deszczach. Ale wtedy trzeba zacisnąć zęby i przeczekać, bo w którymś momencie na naszej ścieżce odnajdzie nas zabłąkany promień słońca.”",
    book: "Wszystkie nasze pory roku",
  },
  {
    id: 9,
    text: "„Pamiętaj czas się nie cofa. Fajnie jest gdy się spotyka winogronko z ciachem, bo potem, na starość, jak siedzi rodzynka ze starym piernikiem, to już tak zabawnie nie jest.”",
    book: "Wszystkie róże świata",
  },
  {
    id: 10,
    text: "„W którymś momencie życia wszyscy grzęźniemy w codzienności.”",
    book: "Milion smutnych atomów",
  },
];
// -------------------------------------------------

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
