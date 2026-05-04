import ScrollReveal from "./ScrollReveal";

export default function StoryAndParents() {
  return (
    <>
      <ScrollReveal delay={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="var(--accent-gold)"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.25 }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="quote" style={{ position: "relative", zIndex: 2 }}>
          "El amor es paciente y muestra comprensión. El amor no tiene celos, no
          aparenta ni se infla. No actúa con bajeza ni busca su propio interés,
          no se deja llevar por la ira y olvida lo malo. No se alegra de lo
          injusto sino que se goza en la verdad. Lo cree todo, lo espera todo y
          soporta todo."
        </p>
        <span className="bible-verse">— 1ra de Corintios 13, 4-6 —</span>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3.5rem 0",
          }}
        >
          <svg
            width="180"
            height="24"
            viewBox="0 0 180 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12H170"
              stroke="var(--accent-gold)"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.3"
            />
            <circle
              cx="90"
              cy="12"
              r="6"
              fill="var(--bg-light)"
              stroke="var(--accent-gold)"
              strokeWidth="1.5"
            />
            <circle cx="90" cy="12" r="2.5" fill="var(--accent-gold)" />
            <path
              d="M76 12L82 7L82 17L76 12Z"
              fill="var(--accent-gold)"
              opacity="0.5"
            />
            <path
              d="M104 12L98 7L98 17L104 12Z"
              fill="var(--accent-gold)"
              opacity="0.5"
            />
          </svg>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="parents-names">
          <p className="intro-text">
            Con la bendición de Dios y nuestros padres uniremos nuestras vidas y
            nos encantaría que fueran testigos de nuestro enlace matrimonial:
          </p>

          <div className="parents-grid">
            {/* Padres del novio */}
            <div className="parents-group">
              <p className="parents-group__label">Padres del Novio</p>
              <div className="parents-group__names">
                <p>Homero Valencia Hernández</p>
                <p>Esperanza García Cruz</p>
              </div>
            </div>

            <div className="parents-divider" aria-hidden="true" />

            {/* Padres de la novia */}
            <div className="parents-group">
              <p className="parents-group__label">Madre de la Novia</p>
              <div className="parents-group__names">
                <p>Isabel Aguilar Valencia</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
