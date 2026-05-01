import Hero from "@/components/Hero";
import GuestPass from "@/components/GuestPass";
import StoryAndParents from "@/components/StoryAndParents";
import ParallaxDivider from "@/components/ParallaxDivider";
import EventDetails from "@/components/EventDetails";
import ItineraryAndDressCode from "@/components/ItineraryAndDressCode";
import NoChildren from "@/components/NoChildren";
import Gallery from "@/components/Gallery";
import GiftInfo from "@/components/GiftInfo";
import RSVP from "@/components/RSVP";
import AudioPlayer from "@/components/AudioPlayer";
import DevFooter from "@/components/DevFooter";

/**
 * Vista de ejemplo de la invitación (sin datos reales de BD).
 * Las invitaciones reales están en /invitacion/[slug].
 */
export default function InvitacionEjemploPage() {
  const exampleData = {
    name: "Familia García Pérez",
    tickets: 4,
  };

  return (
    <main>
      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Padres y cita bíblica ── */}
      <section className="section-light">
        <div className="container text-center">
          <StoryAndParents />
        </div>
      </section>

      {/* ── 3. Divisor Parallax ── */}
      <ParallaxDivider src="/img-8.jpg" alt="Homero y Larissa" portrait />

      {/* ── 4. Fecha y Ubicaciones ── */}
      <section className="section-dark">
        <div className="container text-center">
          <EventDetails />
        </div>
      </section>

      {/* ── 5. Itinerario y Código de Vestimenta ── */}
      <section className="section-light">
        <div className="container text-center">
          <ItineraryAndDressCode />
        </div>
      </section>

      {/* ── 6. Sin Niños ── */}
      <NoChildren />

      {/* ── 7. Galería ── */}
      <Gallery />

      {/* ── 8. Información de Regalo ── */}
      <GiftInfo />

      {/* ── 9. Pase del invitado (nombre + pases) ── */}
      <section className="section-light" style={{ paddingTop: 0 }}>
        <div className="container text-center" style={{ paddingTop: 0 }}>
          <GuestPass
            guestName={exampleData.name}
            totalGuests={exampleData.tickets}
          />
        </div>
      </section>

      {/* ── 10. RSVP ── */}
      <RSVP guestName={exampleData.name} />

      {/* ── 11. Footer del desarrollador ── */}
      <DevFooter />

      {/* ── Botón flotante de audio ── */}
      <AudioPlayer />
    </main>
  );
}
