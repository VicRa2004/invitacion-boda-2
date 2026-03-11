import Hero from "@/components/Hero";
import GuestPass from "@/components/GuestPass";
import DecorativeImage from "@/components/DecorativeImage";
import Locations from "@/components/Locations";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";

export default function Home() {
  // Estos datos los puedes traer después de una base de datos usando parámetros de ruta dinámica
  const guestData = {
    name: "Familia García Pérez",
    tickets: 4,
    table: 12,
  };

  return (
    <div className="background-texture">
      <main className="invitation-card">
        <Hero />

        {/* --- SECCIÓN PERSONALIZADA --- */}
        <GuestPass
          guestName={guestData.name}
          totalGuests={guestData.tickets}
          tableNumber={guestData.table}
        />

        {/* <Quote /> */}

        <DecorativeImage
          src="https://picsum.photos/id/1069/600/400"
          alt="Detalle decorativo"
        />

        {/* <Parents /> */}

        <section className="invitation-text">
          <p>
            Uniremos nuestras vidas y nos encantaría que fueran testigos de
            nuestro enlace matrimonial.
          </p>
        </section>

        <DecorativeImage
          src="https://picsum.photos/id/1080/600/400"
          alt="Anillos o flores"
        />

        <section className="date-time">
          <div className="date-box">
            <span className="day">Sábado</span>
            <span className="number">27</span>
            <span className="month">Junio 2026</span>
          </div>
        </section>

        <Locations />
        {/* <Itinerary /> */}
        {/* <DressCode /> */}
        <Gallery />

        {/* Pasamos el nombre al RSVP para que el WhatsApp ya vaya pre-llenado */}
        <RSVP guestName={guestData.name} />
      </main>
    </div>
  );
}
