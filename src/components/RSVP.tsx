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

  const whatsappMsg = `¡Hola! Confirmo mi asistencia a la boda de Homero y Larissa. Mi nombre es: ${guestName}`;
  const whatsappUrl = `https://wa.me/529932126695?text=${encodeURIComponent(whatsappMsg)}`;

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
          <h2 className="section-title text-white">Asistencia</h2>

          {confirmed ? (
            /* ── Estado confirmado ── */
            <div className="rsvp-confirmed">
              <div className="rsvp-confirmed__icon">✓</div>
              <p className="rsvp-confirmed__title">
                ¡Asistencia confirmada!
              </p>
              <p className="rsvp-confirmed__subtitle">
                Gracias, {guestName}. ¡Nos vemos en la boda!
              </p>
              {message && <p className="rsvp-message">{message}</p>}
            </div>
          ) : (
            /* ── Estado pendiente ── */
            <>
              <p className="text-white mb-2">
                Por favor, confirma tu asistencia antes del
                <br />
                <strong className="text-gold">20 de Mayo del 2026</strong>
              </p>

              {message && (
                <p className="rsvp-message rsvp-message--error">{message}</p>
              )}

              <div className="rsvp-actions">
                {slug && (
                  <button
                    type="button"
                    className="btn btn-solid-gold mt-2"
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
                  className="btn btn-outline-gold mt-2"
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
