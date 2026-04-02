/**
 * Script para crear un usuario administrador en la base de datos.
 *
 * Uso:
 *   npx tsx scripts/create-admin.ts
 *   npx tsx scripts/create-admin.ts --email admin@boda.com --password mi_clave --name Homero
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

// ─── Valores por defecto ────────────────────────────────────────────
const DEFAULT_EMAIL = "admin@boda.com";
const DEFAULT_PASSWORD = "admin123";
const DEFAULT_NAME = "Homero";
const SALT_ROUNDS = 10;

// ─── Parsear argumentos CLI ─────────────────────────────────────────
function getArg(flag: string, fallback: string): string {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return fallback;
}

const email = getArg("--email", DEFAULT_EMAIL);
const password = getArg("--password", DEFAULT_PASSWORD);
const name = getArg("--name", DEFAULT_NAME);

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error("❌ DATABASE_URL no está definida en .env");
    process.exit(1);
  }

  console.log("🔌 Conectando a la base de datos...");

  const adapter = new PrismaPg({ connectionString: dbUrl });
  const prisma = new PrismaClient({ adapter });

  try {
    // Verificar si ya existe
    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) {
      console.log(`⚠️  El usuario "${email}" ya existe (ID: ${existing.id}).`);
      console.log("   No se creó un duplicado.");
      return;
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    console.log("");
    console.log("✅ Usuario administrador creado exitosamente:");
    console.log("┌──────────────────────────────────────────");
    console.log(`│  ID:       ${user.id}`);
    console.log(`│  Email:    ${user.email}`);
    console.log(`│  Nombre:   ${user.name}`);
    console.log(`│  Password: ${password}`);
    console.log("└──────────────────────────────────────────");
    console.log("");
  } catch (error) {
    console.error("❌ Error al crear el usuario:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
