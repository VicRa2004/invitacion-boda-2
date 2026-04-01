import bcrypt from "bcrypt";
import prisma from "../config/prisma";

const SALT_ROUNDS = 10;

// ─── Tipos auxiliares ────────────────────────────────────────────────
type CreateUserInput = {
  email: string;
  password: string; // texto plano → se hashea internamente
  name?: string;
};

type UpdateUserInput = {
  email?: string;
  password?: string; // si se envía, se re-hashea
  name?: string | null;
};

// ─── CRUD ────────────────────────────────────────────────────────────

/**
 * Crea un usuario nuevo hasheando la contraseña antes de guardarla.
 */
export async function createUser(data: CreateUserInput) {
  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  });
}

/**
 * Devuelve todos los usuarios (sin exponer el hash de contraseña).
 */
export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Busca un usuario por su ID (sin exponer la contraseña).
 */
export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Busca un usuario por email **incluyendo** el hash de contraseña.
 * Útil internamente para flujos de autenticación.
 */
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

/**
 * Actualiza un usuario. Si se envía `password`, la re-hashea.
 */
export async function updateUser(id: string, data: UpdateUserInput) {
  const updateData: Record<string, unknown> = { ...data };

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }

  return prisma.user.update({
    where: { id },
    data: updateData,
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Elimina un usuario por ID.
 */
export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  });
}

/**
 * Verifica si la contraseña en texto plano coincide con el hash almacenado.
 */
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
