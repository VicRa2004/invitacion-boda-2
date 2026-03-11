export default function Locations() {
  return (
    <section className="locations">
      <div className="location">
        <h2 className="section-title">Ceremonia</h2>
        <p className="time">4:00 PM</p>
        <p className="place">Parroquia San Francisco de Asís</p>
        <p className="address">
          Villa Tamulté de las Sábanas, Centro, Tabasco.
        </p>
        <a
          href="https://maps.google.com/?q=Parroquia+San+Francisco+de+Asis+Villa+Tamulte"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ver Ubicación
        </a>
      </div>

      <div className="location">
        <h2 className="section-title">Recepción</h2>
        <p className="time">Al término de la ceremonia</p>
        <p className="place">Salón de eventos el “DOMO”</p>
        <p className="address">
          Calle Álvaro Obregón, Villa Tamulté de las Sabanas.
        </p>
        <a
          href="https://maps.google.com/?q=Salon+Domo+Alvaro+Obregon+Villa+Tamulte"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ver Ubicación
        </a>
      </div>
    </section>
  );
}
