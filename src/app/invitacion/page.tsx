import Hero from "@/components/Hero";
import GuestPass from "@/components/GuestPass";
import StoryAndParents from "@/components/StoryAndParents";
import ParallaxDivider from "@/components/ParallaxDivider";
import EventDetails from "@/components/EventDetails";
import ItineraryAndDressCode from "@/components/ItineraryAndDressCode";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";

/**
 * Vista de ejemplo de la invitación (sin datos reales).
 * Las invitaciones reales están en /invitacion/[slug].
 */
export default function InvitacionEjemploPage() {
  const exampleData = {
    name: "Familia García Pérez",
    tickets: 4,
    table: "12",
  };

  return (
    <main className="modern-web-experience">
      <Hero />

      <section className="section-light">
        <div className="container text-center">
          <GuestPass
            guestName={exampleData.name}
            totalGuests={exampleData.tickets}
            tableNumber={exampleData.table}
          />
          <StoryAndParents />
        </div>
      </section>

      <ParallaxDivider
        src="https://picsum.photos/id/1069/1920/600"
        alt="Detalle floral"
      />

      <section className="section-dark">
        <div className="container text-center">
          <EventDetails />
        </div>
      </section>

      <section className="section-light">
        <div className="container text-center">
          <ItineraryAndDressCode />
        </div>
      </section>

      <Gallery />

      <RSVP guestName={exampleData.name} />
    </main>
  );
}
