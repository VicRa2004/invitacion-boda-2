import ScrollReveal from "./ScrollReveal";

export default function EventDetails() {
  return (
    <>
      <ScrollReveal>
        <div className="date-box mb-4">
          <span className="day">Sábado</span>
          <span className="number">27</span>
          <span className="month">Junio 2026</span>
        </div>
      </ScrollReveal>

      <div className="locations-grid">
        <ScrollReveal delay={0.2}>
          <div className="location-card">
            <h2 className="section-title text-gold">Ceremonia Religiosa</h2>
            <p className="time">4:00 PM</p>
            <p className="place">Parroquia San Francisco de Asís</p>
            <p className="address">
              Villa Tamulté de las Sabanas, Centro, Tabasco.
            </p>
            <a
              href="https://maps.google.com/?q=Parroquia+San+Francisco+de+Asis+Villa+Tamulte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
            >
              Ver Ubicación
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="location-card">
            <h2 className="section-title text-gold">Recepción</h2>
            <p className="time">Al término de la ceremonia</p>
            <p className="time">6:00 PM</p>
            <p className="place">Salón de eventos el “DOMO”</p>
            <p className="address">
              Calle Álvaro Obregón, Villa Tamulté de las Sabanas.
            </p>
            <a
              href="https://maps.google.com/?q=Salon+Domo+Alvaro+Obregon+Villa+Tamulte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
            >
              Ver Ubicación
            </a>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
