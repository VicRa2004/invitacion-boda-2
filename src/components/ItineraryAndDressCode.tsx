import ScrollReveal from "./ScrollReveal";

export default function ItineraryAndDressCode() {
  return (
    <>
      <ScrollReveal>
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
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="dress-code mt-4">
          <h2 className="section-title">Código de Vestimenta</h2>
          <p className="dress-style">
            <strong>Formal / Elegante</strong>
          </p>
          <p className="dress-note">
            Nos encantaría verte lucir increíble.
            <br />
            <em>(Se reserva el color blanco exclusivo para la novia)</em>.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
