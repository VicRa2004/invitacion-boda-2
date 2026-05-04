import ScrollReveal from "./ScrollReveal";

export default function GiftInfo() {
  return (
    <section className="section-light gift-section">
      <div className="container text-center">
        <ScrollReveal>
          {/* Ícono de sobre animado */}
          <div className="gift-envelope-wrapper" aria-hidden="true">
            <svg
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="gift-envelope-svg"
            >
              {/* Cuerpo del sobre */}
              <rect
                x="4"
                y="10"
                width="72"
                height="46"
                rx="5"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              {/* Solapa del sobre (triángulo superior) */}
              <path
                d="M4 15 L40 38 L76 15"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Línea inferior izquierda */}
              <path
                d="M4 55 L28 36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Línea inferior derecha */}
              <path
                d="M76 55 L52 36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="section-title gift-title">
            ¿Deseas tener un detalle con nosotros?
          </h2>

          <div className="gift-card">
            <p className="gift-primary-text">
              La <strong>asistencia es lo más importante</strong> para nosotros,
              el regalo es opcional.
            </p>
            <div className="gift-divider">
              <span>✦</span>
            </div>
            <p className="gift-secondary-text">
              Pero si tu deseo es tener un detalle con nosotros, puedes hacerlo
              dentro de un <strong>sobre</strong>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
