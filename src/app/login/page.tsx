"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión.");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login">
      <div className="login__bg" aria-hidden="true" />

      <div className="login__card">
        <Link href="/" className="login__back" id="login-back-btn">
          ← Volver al inicio
        </Link>

        <header className="login__header">
          <h1 className="login__title">Panel de Control</h1>
          <p className="login__subtitle">Gestión de invitados</p>
        </header>

        <form className="login__form" onSubmit={handleSubmit}>
          {error && (
            <div className="login__error" id="login-error">
              {error}
            </div>
          )}

          <div className="login__field">
            <label htmlFor="login-email" className="login__label">
              Correo electrónico
            </label>
            <input
              id="login-email"
              className="login__input"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="login__field">
            <label htmlFor="login-password" className="login__label">
              Contraseña
            </label>
            <input
              id="login-password"
              className="login__input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="login__submit"
            disabled={loading}
            id="login-submit-btn"
          >
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>

        <div className="login__ornament" aria-hidden="true">
          H &amp; L
        </div>
      </div>
    </main>
  );
}
