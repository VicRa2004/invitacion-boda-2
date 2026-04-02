import { NextResponse } from "next/server";
import { getGuestBySlug, confirmGuest } from "../../../../../services/guest.service";

/**
 * POST /api/invitacion/[slug]/confirm
 * Endpoint PÚBLICO (sin autenticación) para confirmar asistencia.
 */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const guest = await getGuestBySlug(slug);
    if (!guest) {
      return NextResponse.json(
        { error: "Invitación no encontrada." },
        { status: 404 },
      );
    }

    if (guest.isConfirmed) {
      return NextResponse.json({
        message: "Ya habías confirmado tu asistencia.",
        guest,
      });
    }

    const updated = await confirmGuest(guest.id);

    return NextResponse.json({
      message: "¡Asistencia confirmada exitosamente!",
      guest: updated,
    });
  } catch (error) {
    console.error("Error al confirmar asistencia:", error);
    return NextResponse.json(
      { error: "Error al confirmar asistencia." },
      { status: 500 },
    );
  }
}
