import Hero from "@/components/Hero";
import GuestPass from "@/components/GuestPass";
import StoryAndParents from "@/components/StoryAndParents";
import ParallaxDivider from "@/components/ParallaxDivider";
import EventDetails from "@/components/EventDetails";
import ItineraryAndDressCode from "@/components/ItineraryAndDressCode";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";

export default function Home() {
  // Simulación de datos dinámicos
  const guestData = {
    name: "Familia García Pérez",
    tickets: 4,
    table: 12,
  };

  return (
    <main className="modern-web-experience">
      <Hero />

      {/* --- SECCIÓN CLARA: PASE, FRASE Y PADRES --- */}
      <section className="section-light">
        <div className="container text-center">
          <GuestPass
            guestName={guestData.name}
            totalGuests={guestData.tickets}
            tableNumber={guestData.table}
          />
          <StoryAndParents />
        </div>
      </section>

      {/* --- DIVISOR PARALLAX --- */}
      <ParallaxDivider
        src="https://picsum.photos/id/1069/1920/600"
        alt="Detalle floral"
      />

      {/* --- SECCIÓN OSCURA: FECHA Y UBICACIONES --- */}
      <section className="section-dark">
        <div className="container text-center">
          <EventDetails />
        </div>
      </section>

      {/* --- SECCIÓN CLARA: ITINERARIO Y CÓDIGO DE VESTIMENTA --- */}
      <section className="section-light">
        <div className="container text-center">
          <ItineraryAndDressCode />
        </div>
      </section>

      {/* --- GALERÍA --- */}
      <Gallery />

      {/* --- FOOTER: RSVP --- */}
      <RSVP guestName={guestData.name} />
    </main>
  );
}
