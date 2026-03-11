export default function Home() {
  return (
    <div className="background-texture">
      <main className="invitation-card">
        <img
          src="https://www.transparenttextures.com/patterns/cream-paper.png"
          alt=""
          className="floral-decor top-decor"
          style={{ display: "none" }}
        />

        <section className="hero">
          <p className="pre-title">Nuestra Boda</p>
          <h1 className="names">
            Homero
            <br />
            <span>&</span>
            <br />
            Larissa
          </h1>
        </section>

        <section className="quote">
          <p>
            “El amor es paciente y muestra compresión. El amor no tiene celos,
            no aparenta ni se infla. No actúa con bajeza ni busca su propio
            interés, no se deja llevar por la ira y olvida lo malo. No se alegra
            de lo injusto si no que se goza en la verdad. Lo cree todo, lo
            espera todo y soporta todo.”
          </p>
          <span className="bible-verse">- 1ra de Corintios 13, 4-6 -</span>
        </section>

        <section className="parents">
          <p className="intro-text">
            Con la bendición de Dios y nuestros padres:
          </p>
          <div className="parents-names">
            <div className="parents-groom">
              <p>Homero Valencia Hernández</p>
              <p>Esperanza García Cruz</p>
            </div>
            <div className="parents-bride">
              <p>Isabel Aguilar Valencia</p>
            </div>
          </div>
        </section>

        <section className="invitation-text">
          <p>
            Uniremos nuestras vidas y nos encantaría que fueran testigos de
            nuestro enlace matrimonial.
          </p>
        </section>

        <section className="date-time">
          <div className="date-box">
            <span className="day">Sábado</span>
            <span className="number">27</span>
            <span className="month">Junio 2026</span>
          </div>
        </section>

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

        <section className="itinerary">
          <h2 className="section-title">Itinerario</h2>
          <ul className="timeline">
            <li>
              <strong>4:00 PM</strong> - Ceremonia Religiosa
            </li>
            <li>
              <strong>5:30 PM</strong> - Recepción de Invitados
            </li>
            <li>
              <strong>6:30 PM</strong> - Entrada de los Novios y Vals
            </li>
            <li>
              <strong>7:00 PM</strong> - Banquete
            </li>
            <li>
              <strong>8:30 PM</strong> - Celebración y Baile
            </li>
          </ul>
        </section>

        <section className="dress-code">
          <h2 className="section-title">Código de Vestimenta</h2>
          <p className="dress-style">
            <strong>Formal / Elegante</strong>
          </p>
          <p className="dress-note">
            Nos encantaría verte lucir increíble. <br />
            <em>(Se reserva el color blanco exclusivo para la novia)</em>.
          </p>
        </section>

        <section className="rsvp">
          <h2 className="section-title">Asistencia</h2>
          <p>
            Por favor, confirma tu asistencia antes del
            <br />
            <strong>20 de Mayo del 2026</strong>
          </p>
          <a
            href="https://wa.me/529932126695?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Homero%20y%20Larissa.%20Mi%20nombre%20es:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Confirmar por WhatsApp
          </a>
        </section>
      </main>
    </div>
  );
}
