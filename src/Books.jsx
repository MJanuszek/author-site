import "./style/books.scss";
import Navigation from "./Navigation";
import Buy from "./Buy";
import Quotes from "./Quotes";

const Books = function () {
  return (
    <div className="books-container">
      <Navigation />
      <h2 className="books-title">Książki</h2>
      <Quotes />
      <div className="book new-book">
        <div className="new">Nowość</div>
        <div className="book-cover wszystkie"></div>
        <div className="book-description">
          <p className="desc">
            Podczas parapetówki u znajomych Irena poznaje Radka. O niej mówi
            się, że jest śliczną, zawsze uśmiechniętą optymistką. On ma
            reputację gbura. Jako jedyni samotni w towarzystwie stają się celem
            żartów przyjaciół. Irena żartuje, że randki byłyby fajniejsze, gdyby
            nie trzeba było podczas nich rozmawiać. Radek podchwytuje pomysł –
            proponuje kolację w milczeniu.
          </p>
          <p className="desc">
            Czy można się spotykać i nie zamienić ani słowa? Czy cisza też
            potrafi zbliżać?
          </p>
          <p className="desc">
            Opowieść o tym, że piękna kobieta nie zawsze ma łatwiej, a milczący
            mężczyzna niekoniecznie nie ma nic do powiedzenia. To historia o
            mylnych ocenach, trudnych emocjach i wewnętrznych przemianach. Bo
            życie, jak natura, ma swoje pory roku. Bywa słoneczne, bywa
            deszczowe – ale zawsze warto poczekać na promień słońca.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover jakoś"></div>
        <div className="book-description">
          <p className="desc">
            Wydaje się, że Róża Więdłocha już zasłużyła na własne „długo i
            szczęśliwie”. Ale co jeśli życie nie przypomina komedii romantycznej
            i po szczęśliwym zakończeniu następuje jednak jakiś ciąg dalszy? Czy
            będzie on dla Róży łaskawy? W życie bohaterki zostaje wplątana już
            nie tylko koszmarna młodsza siostra, która ukradła jej narzeczonego,
            ale i śliczna nowa historyczka, przystojny nauczyciel muzyki i dawna
            miłość Dominika. Co spotka Różę? Jakie jeszcze niespodzianki los
            szykuje jej przed napisami końcowymi?
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover jesteś"></div>
        <div className="book-description">
          <p className="desc">
            Opowieść o tym, że miłość nie zawsze wygląda jak w filmie. Nie musi
            się objawiać wielkimi, romantycznymi gestami.
          </p>
          <p className="desc">
            To historia o tym, że rozwijanie skrzydeł wymaga odwagi, czasu i
            samozaparcia. A przede wszystkim to opowieść o tym, o czym doskonale
            wie każda szanująca się komedia romantyczna, że... każda miłość
            zaczyna się lub kończy na lotnisku.
          </p>
          <p className="desc">
            Zosia w krótkim czasie straciła wszystko – męża, pracę i dach nad
            głową. Nie mając dokąd pójść, zatrzymuje się w pustym mieszkaniu,
            którym się opiekuje podczas nieobecności właściciela, Ignacego,
            kompozytora muzyki filmowej. Jej zła passa nie daje jednak za
            wygraną. Kiedy Zosia siedzi w szlafroku na kanapie, wznosząc toast
            za swoje zmarnowane życie, właściciel mieszkania staje w progu.
            Początkowo chce ją wyrzucić, ale gdy dowiaduje się, że kobieta nie
            ma dokąd pójść, pozwala jej zostać.
          </p>
          <p className="desc">
            Czy Zosia i Ignacy odnajdą się w nowej, wspólnej rzeczywistości?
          </p>
          <p className="desc">
            Jak wygląda życie pod jednym dachem osób, które wybitnie działają
            sobie na nerwy? Dlaczego czasem warto zawalczyć o swoje marzenia,
            choć los ewidentnie rzuca kłody pod nogi?
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover każdego"></div>
        <div className="book-description">
          <p className="desc">
            Opowieść o tym, że życie jest cenne, a człowiek powinien szukać
            szczęścia każdego dnia.
          </p>
          <p className="desc">
            „Każdego dnia” to opowieść o różnych obliczach miłości. O dwóch
            siostrach, które więcej dzieli, niż łączy, ale mimo to próbują
            dogadać się ponad podziałami. O mężczyźnie, który od niechęci
            przechodzi do szacunku wobec kobiety będącej jego szefową, aż w
            końcu zaczyna ją lubić...
          </p>
          <p className="desc">
            O kobiecie, która nie znosi, by jej coś narzucać, i nigdy nie
            przyznałaby, że się myli, aż do momentu, gdy uczy się, że nie zawsze
            musi mieć rację. A także o marzycielu, który kochał obrazy, a
            jeszcze bardziej pokochał kobietę, którą na nich uwiecznił.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover dziewczyna"></div>
        <div className="book-description">
          <p className="desc">
            Matylda jest jak wykrywacz kłamstw – od razu wie, kiedy ktoś mówi
            prawdę, a kiedy się z nią mija. Trudno jej przez to nawiązywać
            relacje z innymi ludźmi, a tym bardziej stworzyć związek z
            mężczyzną. Bo przecież każdy czasem kłamie. Prawie każdy – Matylda
            tego nie potrafi. Właśnie dostała zlecenie, by odkryć tajemnicę
            zawodowego kłamcy. Jest zabawny, uroczy, umie oczarować innych i
            wyraźnie gra kogoś innego. Tylko kim naprawdę jest ten, kogo on
            udaje? Matylda nie da się nikomu oszukać. Problem pojawia się wtedy,
            kiedy sama zaczyna oszukiwać… własne serce.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover miłość"></div>
        <div className="book-description">
          <p className="desc">
            To, co na początku miało być tylko na niby, staje się z czasem
            prawdziwe.
          </p>
          <p className="desc">
            Maks odniósł w życiu sukces. Ma stabilną i dobrze płatną pracę oraz
            własne mieszkanie. Jedyne, o czym marzy, to by rodzina przestała na
            niego naciskać, żeby znalazł sobie dziewczynę. W jego głowie rodzi
            się chytry plan, by znaleźć kobietę, która przez pewien czas będzie
            udawała przed bliskimi jego partnerkę.
          </p>
          <p className="desc">
            Elżbieta wciąż mieszka w wynajętym wraz z koleżanką ze studiów
            mieszkaniu. Chciałaby, żeby rodzina przestała nalegać, aby się
            ogarnęła, rzuciła kiepsko płatną pracę w muzeum i zajęła czymś
            bardziej dochodowym. Gdy poznany w kawiarni przystojny mężczyzna w
            garniturze proponuje jej, by udawała jego dziewczynę, Elżbieta
            dostrzega w tym szansę na przekonanie rodziców, że wbrew temu, co
            myślą, stać ją na coś więcej.
          </p>
          <p className="desc">
            Okazuje się, że pracującą w muzeum niespełnioną artystkę i
            zafiksowanego na punkcie swojej pracy biznesmena łączy więcej, niż
            pragnęliby przyznać.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover tajemnica"></div>
        <div className="book-description">
          <p className="desc">
            Karolina i Malwina dowiadują się, że zmarł ich dziadek, który je
            wychował. Pozostawił im w spadku starą leśniczówkę i prośbę, by
            znajdujące się w domu listy przekazały kobiecie o imieniu Stefa,
            jednak siostry nigdy wcześniej o niej nie słyszały. Gdy zaczynają
            sprzątać leśniczówkę, odkrywają, o jak wielu rzeczach nie miały
            pojęcia.
          </p>
          <p className="desc">
            Odnajdują listy młodego marynarza, Antka, które zabiorą je w podróż
            w przeszłość, od lat pięćdziesiątych, po pierwsze lata XXI wieku.
          </p>
          <p className="desc">
            A wszystko na tle pięknego wybrzeża, Kołobrzegu, Helu i niewielkiego
            miasteczka, Gniew.
          </p>
          <p className="desc">
            Prawda, którą odkryją, wpłynie na życie obu sióstr.
          </p>
          <p className="desc">
            „Tajemnice z przeszłości” to wzruszająca historia o więzach
            rodzinnych. O tym, jak bardzo zakorzenieni jesteśmy w przeszłości i
            w naszych rodzinach, nawet jeśli wydaje nam się, że jest zupełnie
            inaczej.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover róże"></div>
        <div className="book-description">
          <p className="desc">
            To historia, która zaczyna się jak niezły film. Róża Więdłocha,
            poznańska bibliotekarka, ma poukładane, spokojne życie. Właśnie
            kupiła mieszkanie, niebawem wychodzi za mąż. Tyle że na drodze do
            szczęścia Róży staje prawdziwa miłość. Miłość, którą niestety nie
            ona ma przeżyć. Jej narzeczony, Patryk, zakochuje się w siostrze
            Róży, Konwalii.
          </p>
          <p className="desc">
            Róża zostaje sama z dwoma kotami, pustym, ale za to zakredytowanym
            mieszkaniem i brakiem dalszych pomysłów na życie. Nieoczekiwanie
            dostaje ofertę pracy w szkole podstawowej. Nie mając nic do
            stracenia, młoda kobieta postanawia podjąć wyzwanie.
          </p>
          <p className="desc">
            To historia o tym, że nie należy bać się zamian, a nieoczekiwanie
            wydarzenia mogą za sobą nieść także coś dobrego. To książka napisana
            z miłości do kina i filmowych opowieści, z których wynieść można
            naukę pomagającą nam podjąć niejedną decyzję. Jest to wreszcie
            literacka zabawa motywem Maniac Pixie Dream Girl znanym z wielu
            filmów.
          </p>
        </div>
      </div>
      <div className="book">
        <div className="book-cover milion"></div>
        <div className="book-description">
          <p className="desc">
            Amelia i Józef są parą od pięciu lat, oboje jednak czują, że nie
            jest już między nimi tak jak dawniej. Wydaje im się, że wciąż bardzo
            się kochają, mimo to coraz trudniej im odnaleźć wspólny język. Choć
            akcja powieści rozgrywa się w kilku ostatnich miesiącach ich
            związku, dzięki retrospekcjom możemy obserwować zmieniające się na
            przestrzeni lat stosunki między bohaterami.
          </p>
          <p className="desc">
            W ich napięte relacje wkraczają kolejne osoby dramatu – śliczna i
            młoda koleżanka z pracy Józefa oraz nowy sąsiad, z którym Amelia
            zaczyna spędzać czas chętniej niż z własnym mężem. Powieść jest
            smutną diagnozą współczesnej rzeczywistości, kiedy słowo „ja” coraz
            częściej zastępuje słowo „my”, stając się powodem rozpadu wielu
            małżeństw. Jest też historią ludzi, którzy, mimo że się kochali, nie
            potrafili być ze sobą.
          </p>
        </div>
      </div>
      <Buy />
    </div>
  );
};
export default Books;
