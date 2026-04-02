import { createUser, getUserByEmail } from "../src/services/user.service";

async function seed() {
  const email = "admin@boda.com";

  const existing = await getUserByEmail(email);
  if (existing) {
    console.log(`✓ El usuario "${email}" ya existe. No se crea duplicado.`);
    process.exit(0);
  }

  const user = await createUser({
    email,
    password: "admin123",
    name: "Homero",
  });

  console.log("✓ Usuario administrador creado:");
  console.log(`  Email:    ${user.email}`);
  console.log(`  Password: admin123`);
  console.log(`  Nombre:   ${user.name}`);

  process.exit(0);
}

seed().catch((err) => {
  console.error("Error en seed:", err);
  process.exit(1);
});
