import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
import { getGuestBySlug } from "@/services/guest.service";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guest = await getGuestBySlug(slug);

  if (!guest) {
    return { title: "Invitación no encontrada" };
  }

  return {
    title: `Invitación – ${guest.name} | Boda Homero y Larissa`,
    description: `Invitación personalizada para ${guest.name} a la boda de Homero y Larissa.`,
  };
}

export default async function InvitacionDinamicaPage({ params }: Props) {
  const { slug } = await params;
  const guest = await getGuestBySlug(slug);

  if (!guest) {
    notFound();
  }

  return (
    <main>
      {/* ── 1. Hero a pantalla completa ── */}
      <Hero />

      {/* ── 2. Sección clara: Padres y cita bíblica ── */}
      <section className="section-light">
        <div className="container text-center">
          <StoryAndParents />
        </div>
      </section>

      {/* ── 3. Divisor Parallax ── */}
      <ParallaxDivider src="/img-3.jpg" alt="Detalle floral" />

      {/* ── 4. Sección oscura: Fecha y Ubicaciones ── */}
      <section className="section-dark">
        <div className="container text-center">
          <EventDetails />
        </div>
      </section>

      {/* ── 5. Sección clara: Itinerario y Código de Vestimenta ── */}
      <section className="section-light">
        <div className="container text-center">
          <ItineraryAndDressCode />
        </div>
      </section>

      {/* ── 6. Sección oscura: Sin Niños ── */}
      <NoChildren />

      {/* ── 7. Galería ── */}
      <Gallery />

      {/* ── 8. Sección clara: Información de Regalo ── */}
      <GiftInfo />

      {/* ── 9. Sección clara: Pase del invitado (nombre + pases) ── */}
      <section className="section-light" style={{ paddingTop: 0 }}>
        <div className="container text-center" style={{ paddingTop: 0 }}>
          <GuestPass
            guestName={guest.name}
            totalGuests={guest.tickets}
          />
        </div>
      </section>

      {/* ── 10. RSVP con frase + confirmación ── */}
      <RSVP
        guestName={guest.name}
        slug={guest.slug}
        isConfirmed={guest.isConfirmed}
      />

      {/* ── 11. Footer del desarrollador ── */}
      <DevFooter />

      {/* ── Botón flotante de audio ── */}
      <AudioPlayer />
    </main>
  );
}
