import "./style/home.scss";

import Header from "./Header";
import Navigation from "./Navigation";
import Books from "./Books";

import Footer from "./Footer";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <Element name="about">
        <section>
          <div className="about-author">
            <h2>Jagoda Wochlik</h2>
            <p className="about-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              voluptas nemo ipsum blanditiis odio, qui veniam consectetur cum
              exercitationem rem aliquam accusantium mollitia sit doloribus
              maxime nam ullam laborum veritatis sint, sunt, ducimus ipsa.
              Laboriosam veritatis blanditiis rerum qui laudantium. Itaque
              voluptatibus beatae consectetur odio? Repellat provident aliquam
              debitis animi itaque ipsum officia saepe unde non eaque dolores
              soluta harum sapiente eveniet consectetur hic veritatis, totam
              est. Debitis fuga voluptatum molestiae deserunt quo aut deleniti
              dignissimos quaerat, et reprehenderit tempore soluta
              necessitatibus ad quod, laboriosam in earum ea consectetur
              pariatur consequatur. Animi facilis eius labore, illo perferendis
              omnis sit quo nemo totam possimus, voluptatum itaque fugiat, in
              saepe quod ea qui rem non unde. Esse, illum, eos ipsa doloribus,
              reprehenderit excepturi odit laboriosam numquam accusamus dicta
              distinctio! Tempore aspernatur aut labore harum explicabo maxime
              itaque voluptatibus exercitationem enim recusandae, quo, illum
              animi necessitatibus sit expedita voluptas beatae, nam nemo qui
              ex. Laborum quidem ducimus quibusdam deserunt consectetur quasi a
              commodi id molestiae quas! Dolorem est accusantium id soluta
              laborum praesentium iusto, repudiandae, quam, exercitationem
              pariatur atque laudantium. Porro distinctio consequatur obcaecati
              beatae minima nemo voluptatibus eligendi culpa accusantium
              laboriosam, saepe tempora dicta mollitia magnam veritatis id
              minus, vero deleniti voluptatum animi aliquid est in rerum.
              Aspernatur eligendi natus debitis optio alias, atque cumque ab
              placeat odit, corporis, sint et ex cupiditate maiores vitae
              officia? Nulla exercitationem maxime ullam inventore minus
              adipisci quia, earum veniam laboriosam, ab molestiae
              reprehenderit. Quasi natus ad culpa hic provident modi reiciendis
              iure corrupti quis, tenetur delectus ab architecto sequi tempore,
              deleniti exercitationem temporibus porro incidunt. Ullam fugiat
              debitis recusandae? Aspernatur soluta dignissimos eveniet, totam
              animi quas molestias commodi, debitis iste eligendi minus earum
              tempore voluptatem ipsam distinctio quae alias dolor illo ex rem
              repellat nulla praesentium beatae laborum. Maxime nobis a vero
              dignissimos recusandae ipsum!
            </p>
          </div>
        </section>
      </Element>

      <Element name="books">
        <section>
          <Books />
        </section>
      </Element>

      <Footer />
    </div>
  );
}

export default Home;
