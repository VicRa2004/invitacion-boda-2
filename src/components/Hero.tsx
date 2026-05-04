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
        <div className="hero-top">
          <ScrollReveal delay={0.2}>
            <p className="pre-title">Nuestra Boda</p>
          </ScrollReveal>
        </div>
        
        <div className="hero-bottom">
          <ScrollReveal delay={0.4}>
            <h1 className="names">
              Homero
              <span>&</span>
              Larissa
            </h1>
            <span className="hero-date-badge">27 · Junio · 2026</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
