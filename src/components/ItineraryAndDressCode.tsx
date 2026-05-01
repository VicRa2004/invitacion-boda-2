import ScrollReveal from "./ScrollReveal";

export default function ItineraryAndDressCode() {
  return (
    <>
      {/* ── Itinerario ── */}
      <ScrollReveal>
        <h2 className="section-title">Itinerario</h2>
        <ul className="timeline">
          <li>
            <strong>4:00 PM</strong>
            Ceremonia Religiosa
          </li>
          <li>
            <strong>6:00 PM</strong>
            Recepción de Invitados
          </li>
          <li>
            <strong>7:00 PM</strong>
            Inicio del Banquete
            <br />
            <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              (Ser puntual)
            </span>
          </li>
        </ul>
      </ScrollReveal>

      {/* ── Código de Vestimenta ── */}
      <ScrollReveal delay={0.2}>
        <div className="dress-code mt-4">
          <h2 className="section-title">Código de Vestimenta</h2>
          <p className="dress-style">
            <strong>Formal / Elegante</strong>
          </p>
          <p className="dress-note">
            Nos encantaría verte lucir increíble.
            <br />
            <em>(Se reserva el color blanco exclusivo para la novia)</em>
          </p>

          {/* Colores de los padres */}
          <div className="color-swatches">
            <div className="color-swatch">
              <div
                className="color-swatch__circle"
                style={{ backgroundColor: "#C0674C" }}
              />
              <span className="color-swatch__name">Terracota</span>
            </div>
            <div className="color-swatch">
              <div
                className="color-swatch__circle"
                style={{ backgroundColor: "#2E7D62" }}
              />
              <span className="color-swatch__name">Verde esmeralda</span>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginTop: "0.85rem",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            Con delicadeza, te pedimos evitar tonos similares a los
            reservados para los padres de los novios.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
