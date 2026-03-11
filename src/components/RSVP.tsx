import ScrollReveal from "./ScrollReveal";

export default function RSVP({ guestName }: { guestName: string }) {
  const message = `¡Hola! Confirmo mi asistencia a la boda de Homero y Larissa. Mi nombre es: ${guestName}`;
  const whatsappUrl = `https://wa.me/529932126695?text=${encodeURIComponent(message)}`;

  return (
    <section className="section-dark rsvp-section">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="section-title text-white">Asistencia</h2>
          <p className="text-white mb-2">
            Por favor, confirma tu asistencia antes del
            <br />
            <strong className="text-gold">20 de Mayo del 2026</strong>
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid-gold mt-2"
          >
            Confirmar por WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
