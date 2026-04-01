import prisma from "../config/prisma";

// ─── Tipos auxiliares ────────────────────────────────────────────────
type CreateGuestInput = {
  slug: string;
  name: string;
  tickets: number;
  table?: string | null;
};

type UpdateGuestInput = {
  slug?: string;
  name?: string;
  tickets?: number;
  table?: string | null;
  isConfirmed?: boolean;
};

// ─── CRUD ────────────────────────────────────────────────────────────

/**
 * Crea un nuevo invitado.
 */
export async function createGuest(data: CreateGuestInput) {
  return prisma.guest.create({ data });
}

/**
 * Devuelve todos los invitados.
 */
export async function getGuests() {
  return prisma.guest.findMany({
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Busca un invitado por su ID.
 */
export async function getGuestById(id: string) {
  return prisma.guest.findUnique({
    where: { id },
  });
}

/**
 * Busca un invitado por su slug (para resolver URLs públicas).
 */
export async function getGuestBySlug(slug: string) {
  return prisma.guest.findUnique({
    where: { slug },
  });
}

/**
 * Actualiza un invitado por ID.
 */
export async function updateGuest(id: string, data: UpdateGuestInput) {
  return prisma.guest.update({
    where: { id },
    data,
  });
}

/**
 * Marca un invitado como confirmado.
 */
export async function confirmGuest(id: string) {
  return prisma.guest.update({
    where: { id },
    data: { isConfirmed: true },
  });
}

/**
 * Elimina un invitado por ID.
 */
export async function deleteGuest(id: string) {
  return prisma.guest.delete({
    where: { id },
  });
}
