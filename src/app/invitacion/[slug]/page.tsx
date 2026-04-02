import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GuestPass from "@/components/GuestPass";
import StoryAndParents from "@/components/StoryAndParents";
import ParallaxDivider from "@/components/ParallaxDivider";
import EventDetails from "@/components/EventDetails";
import ItineraryAndDressCode from "@/components/ItineraryAndDressCode";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
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
    <main className="modern-web-experience">
      <Hero />

      {/* --- SECCIÓN CLARA: PASE, FRASE Y PADRES --- */}
      <section className="section-light">
        <div className="container text-center">
          <GuestPass
            guestName={guest.name}
            totalGuests={guest.tickets}
            tableNumber={guest.table ?? "—"}
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
      <RSVP guestName={guest.name} slug={guest.slug} isConfirmed={guest.isConfirmed} />
    </main>
  );
}
