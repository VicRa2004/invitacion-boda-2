"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface RSVPProps {
  guestName: string;
  slug?: string;
  isConfirmed?: boolean;
}

export default function RSVP({
  guestName,
  slug,
  isConfirmed: initialConfirmed = false,
}: RSVPProps) {
  const [confirmed, setConfirmed] = useState(initialConfirmed);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Número de Lari
  const whatsappMsg = `¡Hola! Confirmo mi asistencia a la boda de Homero y Larissa. Mi nombre es: ${guestName}`;
  const whatsappUrl = `https://wa.me/529932819325?text=${encodeURIComponent(whatsappMsg)}`;

  async function handleConfirm() {
    if (!slug || confirmed) return;
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`/api/invitacion/${slug}/confirm`, {
        method: "POST",
      });
      const data = await res.json();

      if (res.ok) {
        setConfirmed(true);
        setMessage(data.message);
      } else {
        setMessage(data.error || "Error al confirmar.");
      }
    } catch {
      setMessage("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-dark rsvp-section">
      <div className="container text-center">
        <ScrollReveal>
          {/* Frase principal */}
          <p className="rsvp-important-phrase">
            Tu asistencia es lo más importante para nosotros
          </p>

          <h2 className="section-title text-white">Confirmación de Asistencia</h2>

          {confirmed ? (
            /* ── Estado confirmado ── */
            <div className="rsvp-confirmed">
              <div className="rsvp-confirmed__icon">✓</div>
              <p className="rsvp-confirmed__title">¡Asistencia confirmada!</p>
              <p className="rsvp-confirmed__subtitle">
                Gracias, {guestName}. ¡Nos vemos el 27 de Junio!
              </p>
              {message && <p className="rsvp-message">{message}</p>}
            </div>
          ) : (
            /* ── Estado pendiente ── */
            <>
              <p className="text-white mb-2" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                Confirma tu asistencia antes del
                <br />
                <strong className="text-gold">30 de Mayo del 2026</strong>
              </p>

              <p
                className="text-white mb-2"
                style={{
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.55)",
                  fontStyle: "italic",
                  maxWidth: "440px",
                  margin: "0 auto 1.5rem",
                  lineHeight: 1.7,
                }}
              >
                "Cada lugar en nuestra mesa está reservado con amor;
                saber que estarás ahí lo hace todo más especial."
              </p>

              {message && (
                <p className="rsvp-message rsvp-message--error">{message}</p>
              )}

              <div className="rsvp-actions">
                {slug && (
                  <button
                    type="button"
                    className="btn btn-solid-gold"
                    onClick={handleConfirm}
                    disabled={loading}
                    id="rsvp-confirm-btn"
                  >
                    {loading ? "Confirmando..." : "Confirmar asistencia"}
                  </button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold"
                  id="rsvp-whatsapp-btn"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
