import Link from "next/link";

export default function InvitacionNotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-blue)",
        color: "#ffffff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            marginBottom: "1rem",
            color: "var(--accent-gold)",
          }}
        >
          Invitación no encontrada
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "480px",
            margin: "0 auto 2rem",
            lineHeight: 1.8,
          }}
        >
          Lo sentimos, no pudimos encontrar la invitación que buscas. Verifica
          que el enlace sea correcto o contacta a los novios.
        </p>
        <Link href="/" className="btn btn-outline-gold">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
