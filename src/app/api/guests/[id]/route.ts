import { NextResponse } from "next/server";
import { getSession } from "../../../../lib/auth";
import {
  deleteGuest,
  updateGuest,
} from "../../../../services/guest.service";

/**
 * PATCH /api/guests/:id — Actualiza un invitado.
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const guest = await updateGuest(id, body);
    return NextResponse.json({ guest });
  } catch (error) {
    console.error("Error al actualizar invitado:", error);
    return NextResponse.json(
      { error: "Error al actualizar invitado." },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/guests/:id — Elimina un invitado.
 */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const { id } = await params;
    await deleteGuest(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al eliminar invitado:", error);
    return NextResponse.json(
      { error: "Error al eliminar invitado." },
      { status: 500 },
    );
  }
}
