import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="hero-fullscreen">
      <img
        src="https://picsum.photos/id/1014/1920/1080"
        alt="Boda Homero y Larissa"
        className="hero-bg-image"
      />
      <div className="hero-overlay">
        <ScrollReveal delay={0.2}>
          <p className="pre-title">Nuestra Boda</p>
          <h1 className="names">
            Homero
            <br />
            <span>&</span>
            <br />
            Larissa
          </h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
