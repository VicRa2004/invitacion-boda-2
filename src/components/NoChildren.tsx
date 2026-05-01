import ScrollReveal from "./ScrollReveal";

export default function NoChildren() {
  return (
    <section className="section-dark no-children-section">
      <div className="container text-center">
        <ScrollReveal>
          {/* Ícono: silueta infantil con señal de prohibición */}
          <div className="no-children-icon" aria-hidden="true">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="no-children-svg"
              aria-label="Evento exclusivo para adultos, no se permiten niños"
            >
              {/* Cabeza del niño (más pequeña y alta) */}
              <circle cx="32" cy="11" r="6" stroke="currentColor" strokeWidth="2.5" />

              {/* Cuerpo infantil (más corto) */}
              <path
                d="M22 32 C22 22 42 22 42 32 L41 42 H35 V34 H29 V42 H23 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Bracitos levantados (distingue de adulto) */}
              <path
                d="M22 26 L16 22"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M42 26 L48 22"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Círculo de prohibición */}
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />

              {/* Línea diagonal de prohibición */}
              <line
                x1="11"
                y1="11"
                x2="53"
                y2="53"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="section-title text-gold no-children-title">
            Una noche para adultos
          </h2>

          <p className="quote no-children-quote">
            Amamos profundamente a los pequeños, pero esta noche queremos que
            los adultos disfruten, bailen y celebren sin preocupaciones.
          </p>

          <p className="no-children-badge">
            <span>✦</span>&nbsp; Evento exclusivo para adultos &nbsp;<span>✦</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
