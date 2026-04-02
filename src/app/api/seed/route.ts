import { NextResponse } from "next/server";
import { createUser, getUserByEmail } from "../../../services/user.service";

/**
 * GET /api/seed — Crea un usuario admin de prueba.
 * Solo funciona en desarrollo.
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "No disponible en producción." }, { status: 403 });
  }

  const email = "admin@boda.com";

  try {
    const existing = await getUserByEmail(email);
    if (existing) {
      return NextResponse.json({
        message: `El usuario "${email}" ya existe.`,
        user: { email: existing.email, name: existing.name },
      });
    }

    const user = await createUser({
      email,
      password: "admin123",
      name: "Homero",
    });

    return NextResponse.json({
      message: "Usuario admin creado exitosamente.",
      user: { email: user.email, name: user.name },
      credentials: { email, password: "admin123" },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Error al crear usuario.", details: String(error) },
      { status: 500 },
    );
  }
}
