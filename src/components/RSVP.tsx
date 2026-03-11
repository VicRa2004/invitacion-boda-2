export default function RSVP({ guestName }: { guestName: string }) {
  const message = `¡Hola! Confirmo mi asistencia a la boda de Homero y Larissa. Mi nombre es: ${guestName}`;
  const whatsappUrl = `https://wa.me/529932126695?text=${encodeURIComponent(message)}`;

  return (
    <section className="rsvp">
      <h2 className="section-title">Asistencia</h2>
      <p>
        Por favor, confirma tu asistencia antes del
        <br />
        <strong>20 de Mayo del 2026</strong>
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Confirmar por WhatsApp
      </a>
    </section>
  );
}
