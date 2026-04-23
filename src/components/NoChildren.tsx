import ScrollReveal from "./ScrollReveal";

export default function NoChildren() {
  return (
    <section className="section-dark no-children-section">
      <div className="container text-center">
        <ScrollReveal>
          <div className="no-children-icon" aria-hidden="true">
            {/* Silueta de niño con una línea diagonal (SVG inline) */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="no-children-svg"
              aria-label="No se permiten niños"
            >
              {/* Cabeza */}
              <circle cx="32" cy="14" r="7" stroke="currentColor" strokeWidth="2.5" />
              {/* Cuerpo */}
              <path
                d="M20 38 C20 28 44 28 44 38 L44 50 H38 V42 H26 V50 H20 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Línea diagonal de prohibición */}
              <line
                x1="10"
                y1="10"
                x2="54"
                y2="54"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Círculo de prohibición */}
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>

          <h2 className="section-title text-gold no-children-title">
            Una noche para adultos
          </h2>

          <p className="quote no-children-quote">
            Amamos a los pequeños, pero esta noche queremos que los adultos se
            diviertan sin preocupaciones.
          </p>

          <p className="no-children-badge">
            <span>✦</span>&nbsp; Evento exclusivo para adultos &nbsp;<span>✦</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
