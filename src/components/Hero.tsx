import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="hero-fullscreen">
      <img
        src="/img-11.jpg"
        alt="Boda Homero y Larissa"
        className="hero-bg-image"
      />
      <div className="hero-overlay">
        <ScrollReveal delay={0.2}>
          <p className="pre-title">Nuestra Boda</p>
          <h1 className="names">
            Homero
            <span>&</span>
            Larissa
          </h1>
          <span className="hero-date-badge">27 · Junio · 2026</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
