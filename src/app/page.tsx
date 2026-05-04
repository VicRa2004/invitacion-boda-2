import Link from "next/link";
import "./home.css";
import { getSession } from "@/lib/auth";

export default async function HomePage() {
  const session = await getSession();

  return (
    <main className="home">
      {/* ── Fondo decorativo ── */}
      <div className="home__bg" aria-hidden="true" />

      {/* ── Contenido central ── */}
      <section className="home__hero">
        <p className="home__pre-title">Bienvenidos</p>
        <h1 className="home__title">Homero &amp; Larissa</h1>
        <span className="home__divider" />

        <p className="home__description">
          Esta es la plataforma oficial de nuestra boda. Aquí podrás consultar tu
          invitación personalizada con los detalles del evento, confirmar tu
          asistencia y conocer toda la información que necesitas para acompañarnos
          en este día tan especial.
        </p>

        <div className="home__actions">
          {session ? (
            <Link href="/dashboard" className="btn btn-solid-gold" id="home-dashboard-btn">
              Ir al dashboard
            </Link>
          ) : (
            <Link href="/login" className="btn btn-solid-gold" id="home-login-btn">
              Iniciar sesión
            </Link>
          )}
          <Link
            href="/invitacion"
            className="btn btn-outline-gold"
            id="home-preview-btn"
          >
            Ver invitación de ejemplo
          </Link>
        </div>
      </section>

      {/* ── Footer sutil ── */}
      <footer className="home__footer">
        <p>Con amor, Homero &amp; Larissa &bull; 2026</p>
      </footer>
    </main>
  );
}
