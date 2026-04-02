"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

type Guest = {
  id: string;
  slug: string;
  name: string;
  tickets: number;
  table: string | null;
  isConfirmed: boolean;
  createdAt: string;
};

type User = {
  userId: string;
  email: string;
  name?: string | null;
};

export default function DashboardPage() {
  const router = useRouter();

  // ── Estado de sesión ──
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // ── Estado de invitados ──
  const [guests, setGuests] = useState<Guest[]>([]);
  const [guestsLoading, setGuestsLoading] = useState(true);

  // ── Formulario ──
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tickets: 1,
    table: "",
  });
  const [saving, setSaving] = useState(false);

  // ── Mensajes ──
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // ── Copiar link ──
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ── Edición ──
  const [editGuest, setEditGuest] = useState<Guest | null>(null);
  const [editData, setEditData] = useState({
    name: "",
    tickets: 1,
    table: "",
    isConfirmed: false,
  });
  const [editSaving, setEditSaving] = useState(false);

  // ── Verificar sesión al cargar ──
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.push("/login");
          return;
        }
        const data = await res.json();
        setUser(data.user);
      } catch {
        router.push("/login");
      } finally {
        setAuthLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  // ── Cargar invitados ──
  useEffect(() => {
    if (!authLoading && user) {
      fetchGuests();
    }
  }, [authLoading, user]);

  async function fetchGuests() {
    setGuestsLoading(true);
    try {
      const res = await fetch("/api/guests");
      if (res.ok) {
        const data = await res.json();
        setGuests(data.guests);
      }
    } catch (err) {
      console.error("Error al cargar invitados:", err);
    } finally {
      setGuestsLoading(false);
    }
  }

  // ── Logout ──
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }



  // ── Crear invitado ──
  async function handleCreateGuest(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    try {
      const res = await fetch("/api/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error });
        return;
      }

      setMessage({ type: "success", text: `¡"${data.guest.name}" fue añadido exitosamente!` });
      setFormData({ name: "", tickets: 1, table: "" });
      setShowForm(false);
      fetchGuests();
    } catch {
      setMessage({ type: "error", text: "Error de conexión." });
    } finally {
      setSaving(false);
    }
  }

  // ── Copiar link de invitación ──
  function handleCopyLink(slug: string, id: string) {
    const url = `${window.location.origin}/invitacion/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  // ── Abrir modal de edición ──
  function handleEdit(guest: Guest) {
    setEditGuest(guest);
    setEditData({
      name: guest.name,
      tickets: guest.tickets,
      table: guest.table || "",
      isConfirmed: guest.isConfirmed,
    });
  }

  // ── Guardar edición ──
  async function handleEditSave(e: FormEvent) {
    e.preventDefault();
    if (!editGuest) return;
    setEditSaving(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/guests/${editGuest.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editData.name,
          tickets: Number(editData.tickets),
          table: editData.table || null,
          isConfirmed: editData.isConfirmed,
        }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: `"${editData.name}" fue actualizado.` });
        setEditGuest(null);
        fetchGuests();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "Error al actualizar." });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión." });
    } finally {
      setEditSaving(false);
    }
  }

  // ── Eliminar invitado ──
  async function handleDelete(id: string, name: string) {
    if (!confirm(`¿Seguro que deseas eliminar a "${name}"?`)) return;

    try {
      const res = await fetch(`/api/guests/${id}`, { method: "DELETE" });
      if (res.ok) {
        setMessage({ type: "success", text: `"${name}" fue eliminado.` });
        fetchGuests();
      } else {
        setMessage({ type: "error", text: "Error al eliminar." });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión." });
    }
  }

  // ── Cálculos para las stats ──
  const totalGuests = guests.length;
  const totalTickets = guests.reduce((sum, g) => sum + g.tickets, 0);
  const confirmed = guests.filter((g) => g.isConfirmed).length;

  // ── Loading state ──
  if (authLoading) {
    return (
      <div className="dash">
        <div className="dash__loading">
          <div className="dash__spinner" />
          Verificando sesión...
        </div>
      </div>
    );
  }

  return (
    <div className="dash">
      {/* ── Header ── */}
      <header className="dash__header">
        <span className="dash__brand">H &amp; L</span>
        <div className="dash__user-area">
          <span className="dash__user-name">
            {user?.name || user?.email}
          </span>
          <button
            type="button"
            className="dash__logout"
            onClick={handleLogout}
            id="dash-logout-btn"
          >
            Salir
          </button>
        </div>
      </header>

      {/* ── Contenido ── */}
      <main className="dash__content">
        {/* Bienvenida */}
        <div className="dash__welcome">
          <h1>Hola, {user?.name || "Admin"}</h1>
          <p>Gestiona la lista de invitados de la boda</p>
        </div>

        {/* Stats */}
        <div className="dash__stats">
          <div className="stat-card">
            <div className="stat-card__label">Invitados</div>
            <div className="stat-card__value">{totalGuests}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">Total pases</div>
            <div className="stat-card__value">{totalTickets}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">Confirmados</div>
            <div className="stat-card__value">{confirmed}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">Pendientes</div>
            <div className="stat-card__value">{totalGuests - confirmed}</div>
          </div>
        </div>

        {/* Mensajes */}
        {message && (
          <div
            className={`dash__message dash__message--${message.type}`}
            id="dash-message"
          >
            {message.text}
          </div>
        )}

        {/* Sección invitados */}
        <section className="dash__section">
          <div className="dash__section-header">
            <h2 className="dash__section-title">Lista de Invitados</h2>
            <button
              type="button"
              className="dash__toggle-form"
              onClick={() => {
                setShowForm(!showForm);
                setMessage(null);
              }}
              id="dash-add-btn"
            >
              {showForm ? "Cancelar" : "+ Añadir invitado"}
            </button>
          </div>

          {/* Formulario colapsable */}
          <div
            className={`dash__form-wrapper ${
              showForm
                ? "dash__form-wrapper--visible"
                : "dash__form-wrapper--hidden"
            }`}
          >
            <form
              className="dash__form"
              onSubmit={handleCreateGuest}
              id="dash-guest-form"
            >
              <div className="dash__form-grid">
                <div className="dash__field">
                  <label htmlFor="guest-name" className="dash__label">
                    Nombre del invitado
                  </label>
                  <input
                    id="guest-name"
                    className="dash__input"
                    type="text"
                    placeholder='Ej. "Familia García Pérez"'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="dash__field">
                  <label htmlFor="guest-tickets" className="dash__label">
                    Nº de pases
                  </label>
                  <input
                    id="guest-tickets"
                    className="dash__input"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.tickets}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        tickets: Number(e.target.value),
                      }))
                    }
                    required
                  />
                </div>

                <div className="dash__field">
                  <label htmlFor="guest-table" className="dash__label">
                    Mesa (opcional)
                  </label>
                  <input
                    id="guest-table"
                    className="dash__input"
                    type="text"
                    placeholder='Ej. "A1"'
                    value={formData.table}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        table: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="dash__form-actions">
                <button
                  type="button"
                  className="dash__btn-cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="dash__btn-save"
                  disabled={saving}
                  id="dash-save-btn"
                >
                  {saving ? "Guardando..." : "Guardar invitado"}
                </button>
              </div>
            </form>
          </div>

          {/* Tabla de invitados */}
          {guestsLoading ? (
            <div className="dash__loading">
              <div className="dash__spinner" />
              Cargando invitados...
            </div>
          ) : guests.length === 0 ? (
            <div className="dash__empty">
              <div className="dash__empty-icon">📋</div>
              <p>Aún no hay invitados registrados.</p>
              <p>Haz clic en &quot;+ Añadir invitado&quot; para comenzar.</p>
            </div>
          ) : (
            <div className="dash__table-wrapper">
              <table className="dash__table" id="dash-guests-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Slug</th>
                    <th>Pases</th>
                    <th>Mesa</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((guest) => (
                    <tr key={guest.id}>
                      <td>{guest.name}</td>
                      <td>
                        <a
                          href={`/invitacion/${guest.slug}`}
                          className="dash__slug-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {guest.slug}
                        </a>
                      </td>
                      <td>{guest.tickets}</td>
                      <td>{guest.table || "—"}</td>
                      <td>
                        <span
                          className={`badge ${
                            guest.isConfirmed
                              ? "badge--confirmed"
                              : "badge--pending"
                          }`}
                        >
                          {guest.isConfirmed ? "Confirmado" : "Pendiente"}
                        </span>
                      </td>
                      <td>
                        <div className="dash__actions-group">
                          <button
                            type="button"
                            className="dash__btn-copy"
                            onClick={() => handleCopyLink(guest.slug, guest.id)}
                            title="Copiar link de invitación"
                          >
                            {copiedId === guest.id ? "✓ ¡Copiado!" : "📋 Copiar link"}
                          </button>
                          <button
                            type="button"
                            className="dash__btn-edit"
                            onClick={() => handleEdit(guest)}
                          >
                            ✏️ Editar
                          </button>
                          <button
                            type="button"
                            className="dash__btn-delete"
                            onClick={() => handleDelete(guest.id, guest.name)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* ── Modal de edición ── */}
      {editGuest && (
        <div className="dash__modal-overlay" onClick={() => setEditGuest(null)}>
          <div
            className="dash__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash__modal-header">
              <h3 className="dash__modal-title">Editar invitado</h3>
              <button
                type="button"
                className="dash__modal-close"
                onClick={() => setEditGuest(null)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSave} id="dash-edit-form">
              <div className="dash__form-grid">
                <div className="dash__field">
                  <label htmlFor="edit-name" className="dash__label">
                    Nombre
                  </label>
                  <input
                    id="edit-name"
                    className="dash__input"
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="dash__field">
                  <label htmlFor="edit-tickets" className="dash__label">
                    Nº de pases
                  </label>
                  <input
                    id="edit-tickets"
                    className="dash__input"
                    type="number"
                    min="1"
                    max="20"
                    value={editData.tickets}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        tickets: Number(e.target.value),
                      }))
                    }
                    required
                  />
                </div>

                <div className="dash__field">
                  <label htmlFor="edit-table" className="dash__label">
                    Mesa
                  </label>
                  <input
                    id="edit-table"
                    className="dash__input"
                    type="text"
                    placeholder="—"
                    value={editData.table}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        table: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="dash__field">
                  <label className="dash__label">Estado</label>
                  <label className="dash__checkbox">
                    <input
                      type="checkbox"
                      checked={editData.isConfirmed}
                      onChange={(e) =>
                        setEditData((prev) => ({
                          ...prev,
                          isConfirmed: e.target.checked,
                        }))
                      }
                    />
                    <span>Asistencia confirmada</span>
                  </label>
                </div>
              </div>

              <div className="dash__form-actions">
                <button
                  type="button"
                  className="dash__btn-cancel"
                  onClick={() => setEditGuest(null)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="dash__btn-save"
                  disabled={editSaving}
                  id="dash-edit-save-btn"
                >
                  {editSaving ? "Guardando..." : "Guardar cambios"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
