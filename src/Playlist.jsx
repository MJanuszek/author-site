import Navigation from "./Navigation";
import "./style/playlist.scss";

const Playlist = function () {
  return (
    <section className="playlist">
      <Navigation />
      <p className="playlist-text">
        Oto playlista do moich książek. Chcesz się dowiedzieć, jakie piosenki
        podśpiewywała Irena, gotując kolację dla siebie i Radka? Masz ochotę
        razem z Zosią ponucić o przegranym życiu? Chciałabyś posłuchać którejś z
        piosenek granych na pianinie przez Irenę? Ciekawi Cię, jak brzmiały
        utwory z musicalu, który Róża wystawia ze swoimi uczniami? A może masz
        ochotę usłyszeć kultową „Moja dziewuszka nie ma serduszka”, od której
        wzięło się przezwisko Matyldy Dragon?
      </p>

      <p className="playlist-text">
        Wszystkie je znajdziesz właśnie tutaj. Miłego słuchania!
      </p>

      <a
        className="playlist-link"
        href="https://www.youtube.com/watch?v=GP9GevMf4Jo&list=PLdyJwVHzsPxHpODXoHqDHa9EGyUPtsUHa"
        target="_blank"
        rel="noopener noreferrer"
      >
        ▶ Otwórz playlistę na YouTube
      </a>
      <div className="playlist-embed" aria-label="YouTube playlist player">
        <iframe
          title="Playlista do książek"
          src="https://www.youtube.com/embed/videoseries?list=PLdyJwVHzsPxHpODXoHqDHa9EGyUPtsUHa"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
};

export default Playlist;
