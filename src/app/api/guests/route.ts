import { NextResponse } from "next/server";
import { getSession } from "../../../lib/auth";
import { createGuest, getGuests, getGuestBySlug } from "../../../services/guest.service";

/**
 * Genera un slug a partir de un nombre.
 * Elimina acentos, caracteres especiales y reemplaza espacios por guiones.
 */
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .substring(0, 50);
}

/**
 * Genera un slug único verificando contra la BD.
 * Si el slug base ya existe, añade un sufijo aleatorio.
 */
async function generateUniqueSlug(name: string): Promise<string> {
  const baseSlug = generateSlug(name);
  const existing = await getGuestBySlug(baseSlug);

  if (!existing) return baseSlug;

  // Añadir sufijo aleatorio hasta encontrar uno libre
  for (let i = 0; i < 10; i++) {
    const suffix = Math.random().toString(36).substring(2, 6);
    const candidate = `${baseSlug}-${suffix}`;
    const check = await getGuestBySlug(candidate);
    if (!check) return candidate;
  }

  // Fallback con timestamp
  return `${baseSlug}-${Date.now()}`;
}

/**
 * GET /api/guests — Devuelve todos los invitados (requiere autenticación).
 */
export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const guests = await getGuests();
    return NextResponse.json({ guests });
  } catch (error) {
    console.error("Error al obtener invitados:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}

/**
 * POST /api/guests — Crea un nuevo invitado (requiere autenticación).
 * El slug se genera automáticamente a partir del nombre.
 */
export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, tickets, table } = body;

    if (!name || !tickets) {
      return NextResponse.json(
        { error: "Nombre y boletos son requeridos." },
        { status: 400 },
      );
    }

    const slug = await generateUniqueSlug(name);

    const guest = await createGuest({
      name,
      slug,
      tickets: Number(tickets),
      table: table || null,
    });

    return NextResponse.json({ guest }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error al crear invitado:", error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}

